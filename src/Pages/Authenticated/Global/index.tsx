import sendRequest from "Authentication/sendRequest"
import Loader from "Components/Loader"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import EApiMethods from "Utils/Types/EApiMethods"
import GlobalIcon from 'Assets/Icons/earth-blue.svg'
import IGlobalUsers from "./Types/IGlobalUsers"
import DisplayUserList from "./Components/DisplayUserList"
import Button from "Components/Button"
import EButtonTypeList from "Components/Button/Types/EButtonTypeList"
import './Styles/GlobalUsers.scss'

const GlobalUsers = () => {
    const [globalUsers, setGlobalUsers] = useState<IGlobalUsers[] | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const history = useHistory()

    useEffect(() => {
        const getData = async () => {
            const result = await sendRequest(EApiMethods.GET, '/search/random')

            setGlobalUsers(result)

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getData()
    }, [])

    if (!globalUsers) {
        return <Loader icon={GlobalIcon} />
    }

    if (displayReadyLoader) {
        return <Loader icon={GlobalIcon} ready />
    }

    const onClickProfile = (username: string, isThatMe: boolean) => {
        if (isThatMe) {
            return history.push('/my-profile')
        }

        return history.push(`/people/${username}`)
    }

    const refreshUserList = async () => {
        const result = await sendRequest(EApiMethods.GET, '/search/random')

        return setGlobalUsers(result)
    }

    return (
        <div className='global-users-page-wrapper'>
            <div className='header'>
                <h1>Users all around the globe</h1>
                <Button
                    type={EButtonTypeList.PRIMARY}
                    value='Refresh'
                    onClick={refreshUserList}
                />
            </div>
            <DisplayUserList
                users={globalUsers}
                onClickProfile={onClickProfile}
            />
        </div>
    )
}

export default GlobalUsers