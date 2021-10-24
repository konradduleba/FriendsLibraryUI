import React from 'react'
import ExpandedSetting from './ExpandedSetting'
import TrashIcon from 'Assets/Icons/trash-white.svg'
import TurnOffIcon from 'Assets/Icons/turn-off-white.svg'
import PasswordIcon from 'Assets/Icons/key-white.svg'
import { EDandDTypes } from '../Types/EDandDTypes'
import IAccount from '../Types/IAccount'

const Account = ({ setMessageToTheUser }: IAccount) => (
    <div className='tab-content-wrapper'>
        <div className='tab-header'>
            <h1>Account settings</h1>
            <p>Change password, delete or deactivate your account</p>
        </div>
        <ExpandedSetting
            title='Change password'
            description="If password you have been created doesn't suit you, you can always change it here"
            icon={PasswordIcon}
            iconAlt='change password'
            type={EDandDTypes.CHANGE_PASSWORD}
            setMessageToTheUser={setMessageToTheUser}
        />
        <ExpandedSetting
            title='Delete account'
            description="You can delete your account if you want"
            icon={TrashIcon}
            iconAlt='delete account'
            type={EDandDTypes.DELETE}
            setMessageToTheUser={setMessageToTheUser}
        />
        <ExpandedSetting
            title='Deactivate account'
            description="If you wanna take a break of the social app you can always deactivate your account for the specific time period"
            icon={TurnOffIcon}
            iconAlt='deactivate account'
            type={EDandDTypes.DEACTIVATE}
            setMessageToTheUser={setMessageToTheUser}
        />
    </div>
)

export default Account