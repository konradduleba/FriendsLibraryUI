import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import { useEffect, useState } from 'react'
import EApiMethods from 'Utils/Types/EApiMethods'
import IFriends from './Types/IFriends'
import FriendsIcon from 'Assets/Icons/contact-book-blue.svg'
import { useHistory } from 'react-router'
import filterFriendList from './Functions/filterFriendList'
import './Styles/Friends.scss'
import PersonList from 'Components/PersonList'
import ESearchTypes from 'Utils/Types/ESearchTypes'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import Button from 'Components/Button'
import FormSearch from 'Components/Form/Search'

const Friends = () => {
    const [friendsList, setFriendsList] = useState<IFriends[] | [] | null>(null)
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

        console.log(filteredFriendList)

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

    const emptyFriendList = <div className='empty-friends'>
        <p>Your friend list is empty.</p>
        <Button
            value='Find new friend'
            onClick={() => history.push(`/search/${ESearchTypes.USER}`)}
            type={EButtonTypeList.GHOST_BLUE}
        />
    </div>

    return (
        <div className='friens-page-wrapper'>
            <div className='header'>
                <h1>Friends</h1>
                <FormSearch
                    searchQuery={searchQuery}
                    setSearchQuery={onUpdateSearchQuery}
                />
            </div>
            <PersonList
                list={friendsList}
                onClickResult={onClickFriend}
                noResultContent={emptyFriendList}
            />
        </div>
    )
}

export default Friends