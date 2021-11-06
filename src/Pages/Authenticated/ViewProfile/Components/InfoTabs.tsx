import { useState } from "react";
import TabList from "./TabList";
import AccountInfo from "./Account";
import BasicInfo from "./Basic";
import ContactInfo from "./Contact";
import PersonalInfo from "./Personal";
import useWindowSize from "Utils/Functions/useWindowSize";
import checkIsMobileView from "Utils/Functions/checkIsMobileView";
import IProfile from "Pages/Authenticated/Profile/Types/IProfile";
import { ETabList } from "Pages/Authenticated/Profile/Types/ETabList";
import '../Styles/InfoTabs.scss'

interface IInfoTabs {
    profileInfo: IProfile
}

const InfoTabs = ({ profileInfo }: IInfoTabs) => {
    const [activeTab, setActiveTab] = useState<ETabList>(ETabList.ACCOUNT)
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    const { accountInfo, contactInfo, basicInfo, personalInfo } = profileInfo

    if (isMobileView === undefined) {
        return null
    }

    if (isMobileView) {
        return (
            <div className='info-tabs-wrapper'>
                <div className='tab-content'>
                    <h1>Account</h1>
                    <AccountInfo
                        accountInfo={accountInfo}
                    />
                    <h1>Basic</h1>
                    <BasicInfo
                        basicInfo={basicInfo}
                    />
                    <h1>Contact</h1>
                    <ContactInfo
                        contactInfo={contactInfo}
                    />
                    <h1>Personal</h1>
                    <PersonalInfo
                        personalInfo={personalInfo}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className='info-tabs-wrapper'>
            <TabList setActiveTab={setActiveTab} activeTab={activeTab} />
            <div className='tab-content'>
                {activeTab === ETabList.ACCOUNT && <AccountInfo
                    accountInfo={accountInfo}
                />}
                {activeTab === ETabList.BASIC && <BasicInfo
                    basicInfo={basicInfo}
                />}
                {activeTab === ETabList.CONTACT && <ContactInfo
                    contactInfo={contactInfo}
                />}
                {activeTab === ETabList.PERSONAL && <PersonalInfo
                    personalInfo={personalInfo}
                />}
            </div>
        </div>
    )
}

export default InfoTabs