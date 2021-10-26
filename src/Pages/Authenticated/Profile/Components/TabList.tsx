import { ETabList } from "../Types/ETabList";

interface ITabList {
    setActiveTab: (value: ETabList) => void;
    activeTab: ETabList;
}

const TabList = ({ setActiveTab, activeTab }: ITabList) => (
    <div className='tabs-list'>
        <p className={activeTab === ETabList.ACCOUNT ? 'active' : ''} onClick={() => setActiveTab(ETabList.ACCOUNT)}>{ETabList.ACCOUNT}</p>
        <p className={activeTab === ETabList.BASIC ? 'active' : ''} onClick={() => setActiveTab(ETabList.BASIC)}>{ETabList.BASIC}</p>
        <p className={activeTab === ETabList.CONTACT ? 'active' : ''} onClick={() => setActiveTab(ETabList.CONTACT)}>{ETabList.CONTACT}</p>
        <p className={activeTab === ETabList.PERSONAL ? 'active' : ''} onClick={() => setActiveTab(ETabList.PERSONAL)}>{ETabList.PERSONAL}</p>
    </div>
)

export default TabList