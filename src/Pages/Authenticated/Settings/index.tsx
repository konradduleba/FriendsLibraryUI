import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import React, { useEffect, useState } from 'react'
import SettingsTemplate from 'Templates/Settings'
import ITab from 'Templates/Settings/Types/ITab'
import EApiMethods from 'Utils/Types/EApiMethods'
import SettingsIcon from 'Assets/Icons/settings-blue.svg'
import { setTimeout } from 'timers'
import Global from './Components/Global'
import Account from './Components/Account'
import IUserSettings from './Types/IUserSettings'
import checkValidation from 'Pages/Global/Register/Functions/checkValidation'
import IValidators from './Types/IValidators'
import checkIfThereAreSomeChanges from './Functions/checkIfThereAreSomeChanges'
import checkIfThereIsNoValidationErrors from './Functions/checkIfThereIsNoValidationErrors'
import getChangedSettings from './Functions/getChangedSettings'
import IMessageToTheUser from 'Components/MessageToTheUser/IMessageToTheUser'
import './Styles/Settings.scss'

const UserSettings = () => {
    const [userSettings, setUserSettings] = useState<IUserSettings | null>(null)
    const [originalUserSettings, setOriginalUserSettings] = useState<IUserSettings | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        message: '',
        isSuccess: false
    })
    const [validators, setValidators] = useState<IValidators>({
        email: [],
        name: [],
        lastname: []
    })

    useEffect(() => {
        const getPrivacy = async () => {
            const result = await sendRequest(EApiMethods.GET, '/user/account-info')

            const { isSuccess, userData } = result

            if (!isSuccess) {
                return null
            }

            setDisplayReadyLoader(true)

            setUserSettings(userData)

            setOriginalUserSettings(userData)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getPrivacy()
    }, [])

    const onUpdateSetting = (key: string, value: string | number) => {
        return setUserSettings(prevState => {
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
        const doesSomethingChanged = checkIfThereAreSomeChanges(originalUserSettings, userSettings)

        if (!doesSomethingChanged) {
            return setMessageToTheUser({
                isSuccess: false,
                message: "Why would you do that if there is no changes?"
            })
        }

        const canUpdateFields = checkIfThereIsNoValidationErrors(validators)

        if (!canUpdateFields) {
            return setMessageToTheUser({
                isSuccess: false,
                message: "Check if you fill all the fields correctly"
            })
        }

        const data = getChangedSettings(originalUserSettings, userSettings)

        const result = await sendRequest(EApiMethods.PATCH, '/user/information', data)

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
                message: "Can not update your global settings right now. Please try do it later"
            })
        }

        setMessageToTheUser({
            isSuccess: true,
            message: "Your global settings updated"
        })

        return setOriginalUserSettings(userSettings)
    }

    const goThroughtValidators = (key: string, value: string) => {
        const validations = checkValidation(key, value)

        setValidators(prevState => ({
            ...prevState,
            [key]: validations
        }))

        return onUpdateSetting(key, value)
    }

    if (!userSettings) {
        return <Loader icon={SettingsIcon} spin />
    }

    const options: ITab[] = [{
        name: 'Global',
        content: <Global
            goThroughtValidators={goThroughtValidators}
            settings={userSettings}
            validators={validators}
            setMessageToTheUser={setMessageToTheUser}
        />,
        page: 'settings'
    },
    {
        name: 'Account',
        content: <Account setMessageToTheUser={setMessageToTheUser} />
    }]

    const viewsWithoutSubmitButton = ['Account']

    if (displayReadyLoader) {
        return <Loader icon={SettingsIcon} ready />
    }

    return (
        <div className='settings-page-wrapper'>
            <SettingsTemplate
                onSubmitClick={onSubmitClick}
                title='Settings'
                messageToTheUser={messageToTheUser}
                options={options}
                viewsWithoutSubmitButton={viewsWithoutSubmitButton}
                page='settings'
            />
        </div>
    )
}

export default UserSettings