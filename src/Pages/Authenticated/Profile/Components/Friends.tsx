import displayLimitedFriends from "../Functions/displayLimitedFriends"
import IFriendsProfile from "../Types/IFriendsProfile"
import '../Styles/Friends.scss'
import { useHistory } from "react-router"
import useWindowSize from "Utils/Functions/useWindowSize"
import checkIsMobileView from "Utils/Functions/checkIsMobileView"

const FriendsProfile = ({ friendList }: IFriendsProfile) => {
    const history = useHistory()
    const randomFriends = displayLimitedFriends(friendList)
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    if (isMobileView === undefined) {
        return null
    }

    return (
        <div className='friends-wrapper'>
            <h1>Friends</h1>
            <div className='friend-list'>
                {randomFriends.map(({ id, picture, name, lastname, username }) => (
                    <div className='single-friend' key={id} onClick={() => history.push(`/people/${username}`)}>
                        <img src={picture} alt={`${name} ${lastname}`} />
                    </div>
                ))}
                {friendList.length > 4 && <p className='friends-counter'>+ {friendList.length - 3}</p>}
            </div>
        </div>
    )
}

export default FriendsProfile