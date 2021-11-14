import sendRequest from "Authentication/sendRequest"
import Loader from "Components/Loader"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import EApiMethods from "Utils/Types/EApiMethods"
import IGroup from "./Types/IGroup"
import IParams from "./Types/IParams"
import GroupsIcon from 'Assets/Icons/people-blue.svg'
import IFriends from "Pages/Authenticated/Friends/Types/IFriends"
import GroupHeader from "./Components/GroupHeader"
import './Styles/Group.scss'
import PictureAndOwner from "./Components/PictureAndOwner"
import UserList from "./Components/UserList"
import MoveBack from "Components/MoveBack"
import Posts from "./Components/Posts"
import IMessageToTheUser from "Components/MessageToTheUser/IMessageToTheUser"
import CreatePost from "./Components/CreatePost"
import useWindowSize from "Utils/Functions/useWindowSize"
import checkIsMobileView from "Utils/Functions/checkIsMobileView"
import MessageToTheUser from "Components/MessageToTheUser"

const ViewGroup = () => {
    const { name } = useParams<IParams>()
    const [groupData, setGroupData] = useState<IGroup | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [userList, setUserList] = useState<IFriends[] | null>(null)
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)
    const [messageToTheUser, setMessageToTheUser] = useState<IMessageToTheUser>({
        message: '',
        isSuccess: false
    })

    useEffect(() => {
        const getGroupData = async () => {
            const result = await sendRequest(EApiMethods.POST, '/groups/info', { groupName: name })

            const { isSuccess } = result;

            if (isSuccess !== undefined) {
                return null
            }

            const users = await sendRequest(EApiMethods.POST, '/groups/all-users-from-selected-group', { groupName: name })

            setUserList(users)

            setGroupData(result)

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getGroupData()
    }, [name])

    if (!groupData) {
        return <Loader icon={GroupsIcon} />
    }

    if (displayReadyLoader) {
        return <Loader icon={GroupsIcon} ready />
    }

    const { belong, description, name: groupName, owner, picture, posts } = groupData
    const { isThatMe } = owner

    const getGroupPosts = async () => {
        const result = await sendRequest(EApiMethods.POST, '/groups/info', { groupName: name })

        const { isSuccess } = result;

        if (isSuccess !== undefined) {
            return null
        }

        return setGroupData(result)
    }

    const postCreatedComment = async (content: string, id: string) => {
        const data = {
            content,
            id,
            groupName: name
        }

        const result = await sendRequest(EApiMethods.POST, '/group-posts/comment', data)

        if (!result) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'There was a problem while adding a comment'
            })
        }

        setMessageToTheUser(result)

        return await getGroupPosts()
    }

    const onCreatePost = async (title: string, content: string) => {
        const data = {
            title,
            content,
            groupName: name
        }

        const result = await sendRequest(EApiMethods.POST, '/group-posts/create', data)

        if (!result) {
            return setMessageToTheUser({
                isSuccess: false,
                message: 'There was a problem while adding a post'
            })
        }

        setMessageToTheUser(result)

        return await getGroupPosts()
    }

    const { isSuccess, message } = messageToTheUser

    return (
        <div className='view-group-wrapper'>
            {isMobileView && <MessageToTheUser
                isSuccess={isSuccess}
                message={message}
            />}
            <MoveBack />
            <GroupHeader
                name={groupName}
                description={description}
                amIOwner={isThatMe}
                belong={belong}
                messageToTheUser={messageToTheUser}
            />
            <div className='group-content'>
                <div className='information-wrapper'>
                    <PictureAndOwner
                        owner={owner}
                        picture={picture}
                    />
                    <UserList friendList={userList ? userList : []} />
                </div>
                <div className='posts-container'>
                    <CreatePost
                        onCreatePost={onCreatePost}
                    />
                    <Posts
                        list={posts}
                        postCreatedComment={postCreatedComment}
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewGroup