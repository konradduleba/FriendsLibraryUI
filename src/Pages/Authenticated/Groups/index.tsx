import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import { useEffect, useState } from 'react'
import EApiMethods from 'Utils/Types/EApiMethods'
import GroupsIcon from 'Assets/Icons/three-users.svg'
import { useHistory } from 'react-router'
import GroupsSearch from './Components/Search'
import filterGroupList from './Functions/filterGroupList'
import IGroups from './Types/IFriends'
import DisplayGroups from './Components/DisplayGroups'
import './Styles/Groups.scss'

const Groups = () => {
    const [groupList, setGroupList] = useState<IGroups[] | null>(null)
    const [originalGroupList, setOriginalGroupList] = useState<IGroups[] | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const history = useHistory()

    useEffect(() => {
        const getGroupList = async () => {
            const result = await sendRequest(EApiMethods.GET, '/groups/all')

            setGroupList(result)

            setOriginalGroupList(result)

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getGroupList()
    }, [])

    const onUpdateSearchQuery = (value: string) => {
        const filteredFriendList = filterGroupList(originalGroupList, value.toLowerCase())

        setGroupList(filteredFriendList)

        return setSearchQuery(value)
    }

    if (!groupList) {
        return <Loader icon={GroupsIcon} />
    }

    if (displayReadyLoader) {
        return <Loader icon={GroupsIcon} ready />
    }

    const onClickGroup = (username: string) => {
        return history.push(`/group/${username}`)
    }

    return (
        <div className='group-page-wrapper'>
            <div className='header'>
                <h1>Your Groups</h1>
                <GroupsSearch searchQuery={searchQuery} setSearchQuery={onUpdateSearchQuery} />
            </div>
            <DisplayGroups
                groups={groupList}
                onClickGroup={onClickGroup}
            />
        </div>
    )
}

export default Groups