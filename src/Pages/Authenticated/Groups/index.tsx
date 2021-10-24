import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import { useEffect, useState } from 'react'
import EApiMethods from 'Utils/Types/EApiMethods'
import GroupsIcon from 'Assets/Icons/three-users.svg'
import { useHistory } from 'react-router'
import GroupsSearch from './Components/Search'
import filterGroupList from './Functions/filterGroupList'
import IGroups from './Types/IFriends'
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
            <div className='group-list-container'>
                {groupList.map(({ id, name, picture }) => (
                    <div className='single-group' key={id} onClick={() => onClickGroup(id)}>
                        <div className='picture-container'>
                            <img src={picture} alt={name} />
                        </div>
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Groups