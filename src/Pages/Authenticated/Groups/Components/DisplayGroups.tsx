import Button from "Components/Button";
import EButtonTypeList from "Components/Button/Types/EButtonTypeList";
import { useHistory } from "react-router";
import ESearchTypes from "Utils/Types/ESearchTypes";
import IGroups from "../Types/IGroups";

const DisplayGroups = ({ groups, onClickGroup }: IGroups) => {
    const history = useHistory()

    if (!groups.length) {
        return (
            <div className='empty-groups'>
                <p>Your group list is empty.</p>
                <Button
                    value='Find new group'
                    onClick={() => history.push(`/search/${ESearchTypes.GROUP}`)}
                    type={EButtonTypeList.GHOST_BLUE}
                />
            </div>
        )
    }

    return (
        <div className='group-list-container'>
            {groups.map(({ id, name, picture }) => (
                <div className='single-group' key={id} onClick={() => onClickGroup(id)}>
                    <div className='picture-container'>
                        <img src={picture} alt={name} />
                    </div>
                    <p>{name}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayGroups