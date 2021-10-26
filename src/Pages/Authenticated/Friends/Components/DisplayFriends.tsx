import Button from "Components/Button";
import EButtonTypeList from "Components/Button/Types/EButtonTypeList";
import { useHistory } from "react-router";
import IDisplayFriends from "../Types/IDisplayFriends";

const DisplayFriends = ({ friends, onClickFriend }: IDisplayFriends) => {
    const history = useHistory()

    if (!friends.length) {
        return (
            <div className='empty-friends'>
                <p>Your friend list is empty.</p>
                <Button
                    value='Find new friend'
                    onClick={() => history.push('/search/people')}
                    type={EButtonTypeList.GHOST_BLUE}
                />
            </div>
        )
    }

    return (
        <div className='friend-list-container'>
            {friends.map(({ id, name, lastname, picture, username }) => (
                <div className='single-friend' key={id} onClick={() => onClickFriend(username)}>
                    <div className='picture-container'>
                        <img src={picture} alt={`${name} ${lastname}`} />
                    </div>
                    <p>{name} {lastname}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayFriends