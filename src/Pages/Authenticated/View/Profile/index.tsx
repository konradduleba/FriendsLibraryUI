import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import MessageToTheUser from 'Components/MessageToTheUser'
import IMessageToTheUser from 'Components/MessageToTheUser/IMessageToTheUser'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import useWindowSize from 'Utils/Functions/useWindowSize'
import EApiMethods from 'Utils/Types/EApiMethods'
import InfoTabs from './Components/InfoTabs'
import './Styles/Profile.scss'
import './Styles/ProfileMobile.scss'
import IParams from './Types/IParams'
import ProfileIcon from 'Assets/Icons/user-blue.svg'
import Picture from './Components/Picture'
import Intro from './Components/Intro'
import FriendsProfile from './Components/Friends'
import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import IProfile from './Types/IProfile'
import checkInviteStatus from './Functions/checkInviteStatus'
import ICheckInviteStatus from './Types/ICheckInviteStatus'
import moveToTopSmoothly from 'Utils/Functions/moveToTopSmoothly'
import MoveBack from 'Components/MoveBack'
import IFriends from 'Pages/Authenticated/Friends/Types/IFriends'

const ViewProfile = () => {
    const [profileData, setProfileData] = useState<IProfile | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [friendList, setFriendList] = useState<IFriends[] | null>(null)
    const { username } = useParams<IParams>()
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        message: '',
        isSuccess: false
    })
    const [inviteStatus, setInviteStatus] = useState<ICheckInviteStatus | null>(null)

    useEffect(() => {
        const getProfileData = async () => {
            const result = await sendRequest(EApiMethods.POST, '/user/profile', { username })

            const { isSuccess, userData } = result;

            if (!isSuccess) {
                return null
            }

            const friends = await sendRequest(EApiMethods.POST, '/user/user-friend-list', { username })

            setFriendList(friends)

            setProfileData(userData)

            const { inviteStatus, isOnFriendList } = userData

            setInviteStatus(checkInviteStatus(inviteStatus, isOnFriendList))

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getProfileData()
    }, [username])

    if (!profileData || !inviteStatus) {
        return <Loader icon={ProfileIcon} />
    }

    if (displayReadyLoader) {
        return <Loader icon={ProfileIcon} ready />
    }

    const { accountInfo, personalInfo } = profileData

    const { status, className } = inviteStatus

    const removeUserFromFriendList = async () => {
        const result = await sendRequest(EApiMethods.DELETE, '/user/friend', { username })

        const { isSuccess, message } = result;

        setMessageToTheUser({
            isSuccess,
            message
        })

        return setInviteStatus({
            className: isSuccess ? 'invite' : 'remove',
            status: isSuccess ? 'Invite to join your friend list' : 'Remove from your friend list'
        })
    }

    const inviteUser = async () => {
        const result = await sendRequest(EApiMethods.POST, '/user/invite', { username })

        const { isSuccess, message } = result;

        (isMobileView || !isSuccess) && setMessageToTheUser({
            isSuccess,
            message
        })

        return setInviteStatus({
            className: isSuccess ? 'sended' : 'invite',
            status: isSuccess ? 'Invite sended' : 'Invite to join your friend list'
        })
    }

    const onClickHandler = async () => {
        moveToTopSmoothly()

        setMessageToTheUser({
            isSuccess: false,
            message: ''
        })

        if (className === 'invite') {
            return await inviteUser()
        }
        else if (className === 'remove') {
            return await removeUserFromFriendList()
        }

        return setMessageToTheUser({
            isSuccess: false,
            message: 'Invite is already sended'
        })
    }

    const { picture, lastname, name } = accountInfo
    const { aboutMe } = personalInfo

    const { isSuccess, message } = messageToTheUser

    if (isMobileView) {
        return (
            <div className='view-profile-wrapper-mobile'>
                <MessageToTheUser isSuccess={isSuccess} message={message} />
                <MoveBack />
                <div className='header'>
                    <h1>{name} {lastname}'s profile</h1>
                </div>
                <div className={`profile-content ${className}`}>
                    <div className='picture-and-about'>
                        <Picture
                            picture={picture}
                            name={name}
                            lastname={lastname}
                        />
                        <Intro aboutMe={aboutMe} />
                        <FriendsProfile friendList={friendList ? friendList : []} />
                    </div>
                    <Button
                        onClick={onClickHandler}
                        value={status}
                        type={EButtonTypeList.PRIMARY}
                    />
                    <InfoTabs profileInfo={profileData} />
                </div>
            </div>
        )
    }

    return (
        <div className='view-profile-wrapper'>
            <MoveBack />
            <div className='header'>
                <h1>{name} {lastname}'s profile</h1>
                <div className={`options ${className}`}>
                    <MessageToTheUser isSuccess={isSuccess} message={message} />
                    <Button
                        onClick={onClickHandler}
                        value={status}
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
                    />
                    <Intro aboutMe={aboutMe} />
                    <FriendsProfile friendList={friendList ? friendList : []} />
                </div>
                <InfoTabs
                    profileInfo={profileData}
                />
            </div>
        </div>
    )
}

export default ViewProfile