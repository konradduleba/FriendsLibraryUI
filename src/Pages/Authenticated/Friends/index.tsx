import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import { useEffect, useState } from 'react'
import EApiMethods from 'Utils/Types/EApiMethods'
import IFriends from './Types/IFriends'
import FriendsIcon from 'Assets/Icons/two-users.svg'
import { useHistory } from 'react-router'
import FriendsSearch from './Components/Search'
import filterFriendList from './Functions/filterFriendList'
import './Styles/Friends.scss'
import DisplayFriends from './Components/DisplayFriends'

const Friends = () => {
    const [friendsList, setFriendsList] = useState<IFriends[] | null>(null)
    const [originalFriendList, setOriginalFriendList] = useState<IFriends[] | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const history = useHistory()

    useEffect(() => {
        const getFriendsList = async () => {
            const result = await sendRequest(EApiMethods.GET, '/user/friend-list')

            setFriendsList(result)

            setOriginalFriendList(result)

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getFriendsList()
    }, [])

    const onUpdateSearchQuery = (value: string) => {
        const filteredFriendList = filterFriendList(originalFriendList, value.toLowerCase())

        setFriendsList(filteredFriendList)

        return setSearchQuery(value)
    }

    if (!friendsList) {
        return <Loader icon={FriendsIcon} />
    }

    if (displayReadyLoader) {
        return <Loader icon={FriendsIcon} ready />
    }

    const onClickFriend = (username: string) => {
        return history.push(`/people/${username}`)
    }

    return (
        <div className='friens-page-wrapper'>
            <div className='header'>
                <h1>Friend List</h1>
                <FriendsSearch searchQuery={searchQuery} setSearchQuery={onUpdateSearchQuery} />
            </div>
            <DisplayFriends
                friends={friendsList}
                onClickFriend={onClickFriend}
            />
        </div>
    )
}

export default Friends