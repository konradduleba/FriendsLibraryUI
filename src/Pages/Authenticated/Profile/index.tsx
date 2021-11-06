import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import { useEffect, useState } from 'react'
import EApiMethods from 'Utils/Types/EApiMethods'
import ProfileIcon from 'Assets/Icons/user-blue.svg'
import IProfile from './Types/IProfile'
import Picture from './Components/Picture'
import Intro from './Components/Intro'
import FriendsProfile from './Components/Friends'
import IFriends from '../Friends/Types/IFriends'
import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import InfoTabs from './Components/InfoTabs'
import { EParentKeys } from './Types/EParentKeys'
import checkValidation from 'Pages/Global/Register/Functions/checkValidation'
import IValidators from './Types/IValidators'
import checkIfThereAreSomeChanges from './Functions/checkIfThereAreSomeChanges'
import checkIfThereIsNoValidationErrors from './Functions/checkIfThereIsNoValidationErrors'
import useWindowSize from 'Utils/Functions/useWindowSize'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import './Styles/Profile.scss'
import './Styles/ProfileMobile.scss'
import moveToTopSmoothly from 'Utils/Functions/moveToTopSmoothly'
import IMessageToTheUser from 'Components/MessageToTheUser/IMessageToTheUser'
import MessageToTheUser from 'Components/MessageToTheUser'

const initialValidators: IValidators = {
    email: [],
    name: [],
    lastname: [],
    phone: []
}

const Profile = () => {
    const [profileData, setProfileData] = useState<IProfile | null>(null)
    const [originalProfileData, setOriginalProfileData] = useState<IProfile | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [friendList, setFriendList] = useState<IFriends[] | null>(null)
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [validators, setValidators] = useState<IValidators>(initialValidators)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        message: '',
        isSuccess: false
    })
    const [profilePicture, setProfilePicture] = useState<File | null>(null)
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    useEffect(() => {
        const getProfileData = async () => {
            const result = await sendRequest(EApiMethods.GET, '/user/information')

            const { isSuccess, userData } = result;

            if (!isSuccess) {
                return null
            }

            const friends = await sendRequest(EApiMethods.GET, '/user/friend-list')

            setFriendList(friends)

            setProfileData(userData)

            setOriginalProfileData(userData)

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getProfileData()
    }, [])

    if (!profileData) {
        return <Loader icon={ProfileIcon} />
    }

    if (displayReadyLoader) {
        return <Loader icon={ProfileIcon} ready />
    }

    const { accountInfo, personalInfo } = profileData

    const { picture, lastname, name } = accountInfo
    const { aboutMe } = personalInfo

    const updateProfileInfo = async (): Promise<boolean> => {
        const { picture, ...info } = accountInfo

        const data = {
            ...profileData.contactInfo,
            ...info,
            ...profileData.basicInfo,
            ...profileData.personalInfo
        }

        const result = await sendRequest(EApiMethods.PATCH, '/user/information', data)

        if (!result) {
            setMessageToTheUser({
                isSuccess: false,
                message: 'Something went wrong, try later'
            })

            return false
        }

        const { isSuccess } = result

        if (!isSuccess) {
            setMessageToTheUser({
                isSuccess: false,
                message: "Can not update your profile right now. Please try do it later"
            })

            return false
        }

        return true
    }

    const updateProfilePicture = async (): Promise<boolean> => {
        if (!profilePicture) {
            return false
        }

        const formData = new FormData()

        formData.append('file', profilePicture)

        const result = await sendRequest(EApiMethods.POST, '/user/profile-picture', formData)

        if (!result) {
            return false
        }

        const { isSuccess } = result

        return isSuccess
    }

    const getNewProfileData = async () => {
        const result = await sendRequest(EApiMethods.GET, '/user/information')

        const { isSuccess, userData } = result;

        if (!isSuccess) {
            return null
        }

        setProfileData(userData)

        setOriginalProfileData(userData)

        setProfilePicture(null)

        return setIsEditing(false)
    }

    const onClickSubmit = async () => {
        const doesSomethingChanged = checkIfThereAreSomeChanges(originalProfileData, profileData)

        if (isMobileView) {
            moveToTopSmoothly()
        }

        if (!doesSomethingChanged && !profilePicture) {
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

        let status: boolean = false

        if (!doesSomethingChanged && profilePicture) {
            status = await updateProfilePicture()
        }
        else if (doesSomethingChanged && !profilePicture) {
            status = await updateProfileInfo()
        }
        else {
            status = await updateProfileInfo()

            const profileStatus = await updateProfilePicture()

            if (status) {
                status = profileStatus
            }
        }

        if (status) {
            setMessageToTheUser({
                isSuccess: true,
                message: "Your profile updated"
            })
        }
        else {
            setMessageToTheUser({
                isSuccess: false,
                message: "Failed to update your profile"
            })
        }

        return await getNewProfileData()
    }

    const onClickPrimaryButton = () => {
        if (!isEditing) {
            setMessageToTheUser({
                isSuccess: false,
                message: ""
            })

            return setIsEditing(true)
        }

        return onClickSubmit()
    }

    const resetDataToDefaults = () => {
        setProfileData(originalProfileData)

        setValidators(initialValidators)

        setProfilePicture(null)

        setMessageToTheUser({
            isSuccess: false,
            message: ''
        })

        return setIsEditing(false)
    }

    const onUpdateProfileData = (key: string, parentKey: EParentKeys, value: string | Date) => {
        return setProfileData(prevState => {
            if (!prevState) {
                return null
            }

            return ({
                ...prevState,
                [parentKey]: {
                    ...prevState[parentKey],
                    [key]: value
                }
            })
        })
    }

    const goThroughtValidators = (key: string, parentKey: EParentKeys, value: string) => {
        const validations = checkValidation(key, value)

        setValidators(prevState => ({
            ...prevState,
            [key]: validations
        }))

        return onUpdateProfileData(key, parentKey, value)
    }

    if (isMobileView === undefined) {
        return null
    }

    const { isSuccess, message } = messageToTheUser

    if (isMobileView) {
        return (
            <div className='my-profile-wrapper-mobile'>
                <MessageToTheUser isSuccess={isSuccess} message={message} />
                <div className='header'>
                    <h1>My Profile</h1>
                </div>
                <div className='profile-content'>
                    <div className='picture-and-about'>
                        <Picture
                            picture={picture}
                            name={name}
                            lastname={lastname}
                            isEditing={isEditing}
                            profilePicture={profilePicture}
                            setProfilePicture={setProfilePicture}
                        />
                        <Intro aboutMe={aboutMe} />
                        <FriendsProfile friendList={friendList ? friendList : []} />
                    </div>
                    {!isEditing && <div className='options'>
                        <Button
                            onClick={onClickPrimaryButton}
                            value="Edit Information"
                            type={EButtonTypeList.PRIMARY}
                        />
                    </div>}
                    <InfoTabs
                        profileInfo={profileData}
                        isEditing={isEditing}
                        onUpdateProfileData={onUpdateProfileData}
                        validators={validators}
                        goThroughtValidators={goThroughtValidators}
                    />
                </div>
                {isEditing && <Button
                    onClick={resetDataToDefaults}
                    type={EButtonTypeList.SECONDARY}
                    value='Cancel'
                />}
                {isEditing && <Button
                    onClick={onClickPrimaryButton}
                    value='Submit'
                    type={EButtonTypeList.PRIMARY}
                />}
            </div>
        )
    }

    return (
        <div className='my-profile-wrapper'>
            <div className='header'>
                <h1>My Profile</h1>
                <div className='options'>
                    <MessageToTheUser isSuccess={isSuccess} message={message} />
                    {isEditing && <Button
                        onClick={resetDataToDefaults}
                        type={EButtonTypeList.SECONDARY}
                        value='Cancel'
                    />}
                    <Button
                        onClick={onClickPrimaryButton}
                        value={isEditing ? 'Submit' : "Edit Information"}
                        type={EButtonTypeList.PRIMARY}
                    />
                </div>
            </div>
            <div className='profile-content'>
                <div className='picture-and-about'>
                    <Picture
                        picture={picture}
                        name={name}
                        lastname={lastname}
                        isEditing={isEditing}
                        profilePicture={profilePicture}
                        setProfilePicture={setProfilePicture}
                    />
                    <Intro aboutMe={aboutMe} />
                    <FriendsProfile friendList={friendList ? friendList : []} />
                </div>
                <InfoTabs
                    profileInfo={profileData}
                    isEditing={isEditing}
                    onUpdateProfileData={onUpdateProfileData}
                    validators={validators}
                    goThroughtValidators={goThroughtValidators}
                />
            </div>
        </div>
    )
}

export default Profile