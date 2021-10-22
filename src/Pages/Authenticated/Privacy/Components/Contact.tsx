import React from 'react'
import IContent from '../Types/IContent'
import { defaultPrivacyOptions, defaultPrivacyOptionsExtended } from '../Utils/selectOptions'
import SingleSetting from './SingleSetting'

const Contact = ({ settings, onUpdateSetting }: IContent) => {
    const { tag, friendRequest } = settings;

    return (
        <div className='tab-content-wrapper'>
            <div className='tab-header'>
                <h1>Contact Options</h1>
                <p>Decide who can interact with you</p>
            </div>
            <SingleSetting
                title='Who can tag you?'
                onUpdateSetting={onUpdateSetting}
                options={defaultPrivacyOptions}
                setting={tag}
                keyName='tag'
            />
            <SingleSetting
                title='Who can send you friend requests?'
                onUpdateSetting={onUpdateSetting}
                options={defaultPrivacyOptionsExtended}
                setting={friendRequest}
                keyName='friendRequest'
            />
        </div>
    )
}

export default Contact