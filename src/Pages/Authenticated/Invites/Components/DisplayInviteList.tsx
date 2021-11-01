import Button from "Components/Button";
import EButtonTypeList from "Components/Button/Types/EButtonTypeList";
import { useHistory } from "react-router";
import IDisplayInviteList from "../Types/IDisplayInviteList";

const DisplayInviteList = ({ invites, onAcceptInvite, onClickProfile, onRemoveInvite }: IDisplayInviteList) => {
    const history = useHistory()

    if (!invites.length) {
        return (
            <div className='empty-list'>
                <p>Your Invite list is empty.</p>
                <Button
                    value='Find new friends or groups'
                    onClick={() => history.push('/search')}
                    type={EButtonTypeList.GHOST_BLUE}
                />
            </div>
        )
    }

    return (
        <div className='invite-list-container'>
            {invites.map(({ id, name, lastname, picture, username }) => (
                <div className='single-invite' key={id}>
                    <div className='picture-container' onClick={() => onClickProfile(username)}>
                        <img src={picture} alt={`${name} ${lastname}`} />
                    </div>
                    <p>{name} {lastname}</p>
                    <div className='options'>
                        <Button
                            value='Remove'
                            onClick={() => onRemoveInvite(username)}
                            type={EButtonTypeList.PRIMARY}
                        />
                        <Button
                            value='Accept'
                            onClick={() => onAcceptInvite(username)}
                            type={EButtonTypeList.PRIMARY}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayInviteList