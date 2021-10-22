import React from 'react'
import IContent from '../Types/IContent'
import { defaultPrivacyOptions } from '../Utils/selectOptions'
import SingleSetting from './SingleSetting'

const Profile = ({ settings, onUpdateSetting }: IContent) => {
    const { emailAddress, following, friendList, phoneNumber, seeFuturePosts } = settings

    return (
        <div className='tab-content-wrapper'>
            <div className='tab-header'>
                <h1>Profile Visibility</h1>
                <p>Decide who will see your profile credentials</p>
            </div>
            <SingleSetting
                title='Who can see your email adress?'
                onUpdateSetting={onUpdateSetting}
                options={defaultPrivacyOptions}
                setting={emailAddress}
                keyName='emailAddress'
            />
            <SingleSetting
                title='Who can see your phone number?'
                onUpdateSetting={onUpdateSetting}
                options={defaultPrivacyOptions}
                setting={phoneNumber}
                keyName='phoneNumber'
            />
            <SingleSetting
                title='Who can see your friend list?'
                onUpdateSetting={onUpdateSetting}
                options={defaultPrivacyOptions}
                setting={friendList}
                keyName='friendList'
            />
            <SingleSetting
                title='Who can see your future posts?'
                onUpdateSetting={onUpdateSetting}
                options={defaultPrivacyOptions}
                setting={seeFuturePosts}
                keyName='seeFuturePosts'
            />
            <SingleSetting
                title='Who can see the people and pages you follow?'
                onUpdateSetting={onUpdateSetting}
                options={defaultPrivacyOptions}
                setting={following}
                keyName='following'
            />
        </div>
    )
}

export default Profile