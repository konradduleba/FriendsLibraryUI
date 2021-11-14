import { useHistory } from "react-router"
import useWindowSize from "Utils/Functions/useWindowSize"
import checkIsMobileView from "Utils/Functions/checkIsMobileView"
import IFriendsProfile from 'Pages/Authenticated/Profile/Types/IFriendsProfile'
import displayLimitedFriends from 'Pages/Authenticated/Profile/Functions/displayLimitedFriends'

const UserList = ({ friendList }: IFriendsProfile) => {
    const history = useHistory()
    const randomFriends = displayLimitedFriends(friendList)
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    if (isMobileView === undefined) {
        return null
    }

    return (
        <div className='friends-wrapper'>
            <h1>Users</h1>
            <div className='friend-list'>
                {randomFriends.map(({ id, picture, name, lastname, username }, index) => (
                    <div className='single-friend' key={id + index} onClick={() => history.push(`/people/${username}`)}>
                        <img src={picture} alt='' />
                    </div>
                ))}
                {friendList.length > 4 && <p className='friends-counter'>+ {friendList.length - 3}</p>}
            </div>
        </div>
    )
}

export default UserList