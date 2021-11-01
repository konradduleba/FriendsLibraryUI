import sendRequest from "Authentication/sendRequest"
import Loader from "Components/Loader"
import { useEffect, useState } from "react"
import EApiMethods from "Utils/Types/EApiMethods"
import IInviteList from "./Types/IInviteList"
import InviteListIcon from 'Assets/Icons/person-add-blue.svg'
import { useHistory } from "react-router"
import DisplayInviteList from "./Components/DisplayInviteList"
import MessageToTheUser from "Components/MessageToTheUser"
import IMessageToTheUser from "Components/MessageToTheUser/IMessageToTheUser"
import './Styles/Invites.scss'

const Invites = () => {
    const [inviteList, setInviteList] = useState<IInviteList[] | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        isSuccess: false,
        message: ''
    })
    const history = useHistory()

    useEffect(() => {
        const getData = async () => {
            const result = await sendRequest(EApiMethods.GET, '/user/invite-list')

            setInviteList(result)

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getData()
    }, [])

    if (!inviteList) {
        return <Loader icon={InviteListIcon} />
    }

    if (displayReadyLoader) {
        return <Loader icon={InviteListIcon} ready />
    }

    const onAcceptInvite = async (username: string) => {
        const result = await sendRequest(EApiMethods.POST, '/user/new-friend', { username })

        if (!result) {
            return null
        }

        const { isSuccess, message } = result

        setMessageToTheUser({
            isSuccess,
            message
        })

        if (!isSuccess) {
            return null
        }

        return updateInviteList()
    }

    const updateInviteList = async () => {
        const result = await sendRequest(EApiMethods.GET, '/user/invite-list')

        return setInviteList(result)
    }

    const onRemoveInvite = async (username: string) => {
        const result = await sendRequest(EApiMethods.DELETE, '/user/invite', { username })

        if (!result) {
            return null
        }

        const { isSuccess, message } = result

        setMessageToTheUser({
            isSuccess,
            message: isSuccess ? 'Invite have been removed' : message
        })

        if (!isSuccess) {
            return null
        }

        return updateInviteList()
    }

    const onClickProfile = (username: string) => {
        return history.push(`/people/${username}`)
    }

    const { isSuccess, message } = messageToTheUser

    return (
        <div className='invite-page-wrapper'>
            <div className='header'>
                <h1>Invite List</h1>
                <MessageToTheUser isSuccess={isSuccess} message={message} />
            </div>
            <DisplayInviteList
                invites={inviteList}
                onAcceptInvite={onAcceptInvite}
                onClickProfile={onClickProfile}
                onRemoveInvite={onRemoveInvite}
            />
        </div>
    )
}

export default Invites