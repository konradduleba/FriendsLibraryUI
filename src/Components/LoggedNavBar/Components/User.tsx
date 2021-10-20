import React from 'react'
import IUser from '../Types/IUser'

const User = ({ name, picture }: IUser) => {

    return (
        <div className='user-wrapper'>
            <div className='avatar'>
                <img src={picture} alt='profile' />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default User