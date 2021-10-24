import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import { useEffect, useState } from 'react'
import EApiMethods from 'Utils/Types/EApiMethods'
import IFriends from './Types/IFriends'
import FriendsIcon from 'Assets/Icons/two-users.svg'
import { useHistory } from 'react-router'
import './Styles/Friends.scss'

const Friends = () => {
    const [friendsList, setFriendsList] = useState<IFriends[] | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const history = useHistory()

    useEffect(() => {
        const getFriendsList = async () => {
            const result = await sendRequest(EApiMethods.GET, '/user/friend-list')

            setFriendsList(result)

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getFriendsList()
    }, [])

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
            <h1>Friend List</h1>
            <div className='friend-list-container'>
                {friendsList.map(({ id, name, lastname, picture, username }) => (
                    <div className='single-friend' key={id} onClick={() => onClickFriend(username)}>
                        <div className='picture-container'>
                            <img src={picture} alt={`${name} ${lastname}`} />
                        </div>
                        <p>{name} {lastname}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Friends