import IDisplayUserList from "../Types/IDisplayUserList";

const DisplayUserList = ({ users, onClickProfile }: IDisplayUserList) => {
    if (!users.length) {
        return null
    }

    return (
        <div className='global-users-list-container'>
            {users.map(({ id, name, lastname, picture, username, isThatMe }) => (
                <div className='single-user' key={id}>
                    <div className='picture-container' onClick={() => onClickProfile(username, isThatMe)}>
                        <img src={picture} alt={`${name} ${lastname}`} />
                    </div>
                    {isThatMe ? <p>Me</p> : <p>{name} {lastname}</p>}
                </div>
            ))}
        </div>
    )
}

export default DisplayUserList