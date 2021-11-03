
import useWindowSize from "Utils/Functions/useWindowSize"
import checkIsMobileView from "Utils/Functions/checkIsMobileView"
import IPersonList from "./Types/IPersonList"
import DisplayPeople from "./Components/DisplayPeople"
import DisplayGroups from "./Components/DisplayGroups"
import './Styles/PersonList.scss'
import PersonListHeader from "./Components/Header"

const PersonList = ({ list, onClickResult, title, isSearchActive, searchQuery, setSearchQuery, noResultContent, displayGroup, displayHeader, invites, onAcceptInvite, onRemoveInvite }: IPersonList) => {
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    if (!list) {
        return null
    }

    if (!list.length) {
        return (
            <div className='person-list-wrapper'>
                {displayHeader && <PersonListHeader
                    title={title}
                    isSearchActive={isSearchActive}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />}
                <div className='list-container no-results'>
                    {noResultContent}
                </div>
            </div>
        )
    }

    return (
        <div className='person-list-wrapper'>
            {displayHeader && <PersonListHeader
                title={title}
                isSearchActive={isSearchActive}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />}
            {displayGroup ?
                <DisplayGroups
                    list={list}
                    onClickResult={onClickResult}
                    isMobileView={!!isMobileView}
                />
                :
                <DisplayPeople
                    isMobileView={!!isMobileView}
                    list={list}
                    onClickResult={onClickResult}
                    invites={invites}
                    onAcceptInvite={onAcceptInvite}
                    onRemoveInvite={onRemoveInvite}
                />}
        </div>
    )
}

export default PersonList