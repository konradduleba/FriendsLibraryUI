import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import React, { useEffect, useState } from 'react'
import SettingsTemplate from 'Templates/Settings'
import ITab from 'Templates/Settings/Types/ITab'
import EApiMethods from 'Utils/Types/EApiMethods'
import IPrivacy from './Types/IPrivacy'
import PrivacyIcon from 'Assets/Icons/privacy-blue.svg'
import PrivacyOpenIcon from 'Assets/Icons/privacy-open-blue.svg'
import { setTimeout } from 'timers'
import Profile from './Components/Profile'
import Contact from './Components/Contact'
import checkIfPrivacySettingsHaveChanged from './Functions/checkIfPrivacySettingsHaveChanged'
import IMessageToTheUser from 'Components/MessageToTheUser/IMessageToTheUser'
import './Styles/Privacy.scss'

const UserPrivacy = () => {
    const [privacySettings, setPrivacySettings] = useState<IPrivacy | null>(null)
    const [originalPrivacySettings, setOriginalPrivacySettings] = useState<IPrivacy | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        message: '',
        isSuccess: false
    })

    useEffect(() => {
        const getPrivacy = async () => {
            const result = await sendRequest(EApiMethods.GET, '/user/privacy')

            const { isSuccess, privacyInfo } = result

            if (!isSuccess) {
                return null
            }

            setDisplayReadyLoader(true)

            setPrivacySettings(privacyInfo)

            setOriginalPrivacySettings(privacyInfo)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getPrivacy()
    }, [])

    const onUpdateSetting = (key: string, value: string | number) => {
        return setPrivacySettings(prevState => {
            if (!prevState) {
                return null
            }

            return ({
                ...prevState,
                [key]: value
            })
        })
    }

    const onSubmitClick = async () => {
        const doesSomethingChanged = checkIfPrivacySettingsHaveChanged(originalPrivacySettings, privacySettings)

        if (!doesSomethingChanged) {
            return setMessageToTheUser({
                isSuccess: false,
                message: "Why would you do that if there is no changes?"
            })
        }

        const userPrivacy = { ...privacySettings }

        const result = await sendRequest(EApiMethods.PATCH, '/user/privacy', userPrivacy)

        if (!result) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'Something went wrong, try later'
            })
        }

        const { isSuccess } = result

        if (!isSuccess) {
            return setMessageToTheUser({
                isSuccess: false,
                message: "Can not update your privacy config right now. Please try do it later"
            })
        }

        setMessageToTheUser({
            isSuccess: true,
            message: "Your privacy config updated"
        })

        return setOriginalPrivacySettings(privacySettings)
    }

    if (!privacySettings) {
        return <Loader icon={PrivacyIcon} />
    }

    const options: ITab[] = [{
        name: 'Profile',
        content: <Profile onUpdateSetting={onUpdateSetting} settings={privacySettings} />
    },
    {
        name: 'Contact',
        content: <Contact onUpdateSetting={onUpdateSetting} settings={privacySettings} />
    }]

    if (displayReadyLoader) {
        return <Loader icon={PrivacyOpenIcon} ready />
    }

    return (
        <SettingsTemplate
            onSubmitClick={onSubmitClick}
            title='Privacy'
            messageToTheUser={messageToTheUser}
            options={options}
        />
    )
}

export default UserPrivacy