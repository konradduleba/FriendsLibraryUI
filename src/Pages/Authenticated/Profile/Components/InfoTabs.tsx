import { useState } from "react";
import { ETabList } from "../Types/ETabList";
import IInfoTabs from "../Types/IInfoTabs";
import TabList from "./TabList";
import '../Styles/InfoTabs.scss'
import AccountInfo from "./Account";
import BasicInfo from "./Basic";
import ContactInfo from "./Contact";
import PersonalInfo from "./Personal";
import useWindowSize from "Utils/Functions/useWindowSize";
import checkIsMobileView from "Utils/Functions/checkIsMobileView";

const InfoTabs = ({ profileInfo, isEditing, onUpdateProfileData, goThroughtValidators, validators }: IInfoTabs) => {
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
                        isEditing={isEditing}
                        goThroughtValidators={goThroughtValidators}
                        validators={validators}
                    />
                    <h1>Basic</h1>
                    <BasicInfo
                        basicInfo={basicInfo}
                        isEditing={isEditing}
                        onUpdateProfileData={onUpdateProfileData}
                    />
                    <h1>Contact</h1>
                    <ContactInfo
                        contactInfo={contactInfo}
                        isEditing={isEditing}
                        goThroughtValidators={goThroughtValidators}
                        validators={validators}
                    />
                    <h1>Personal</h1>
                    <PersonalInfo
                        personalInfo={personalInfo}
                        isEditing={isEditing}
                        onUpdateProfileData={onUpdateProfileData}
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
                    isEditing={isEditing}
                    goThroughtValidators={goThroughtValidators}
                    validators={validators}
                />}
                {activeTab === ETabList.BASIC && <BasicInfo
                    basicInfo={basicInfo}
                    isEditing={isEditing}
                    onUpdateProfileData={onUpdateProfileData}
                />}
                {activeTab === ETabList.CONTACT && <ContactInfo
                    contactInfo={contactInfo}
                    isEditing={isEditing}
                    goThroughtValidators={goThroughtValidators}
                    validators={validators}
                />}
                {activeTab === ETabList.PERSONAL && <PersonalInfo
                    personalInfo={personalInfo}
                    isEditing={isEditing}
                    onUpdateProfileData={onUpdateProfileData}
                />}
            </div>
        </div>
    )
}

export default InfoTabs