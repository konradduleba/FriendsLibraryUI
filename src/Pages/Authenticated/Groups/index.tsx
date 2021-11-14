import sendRequest from 'Authentication/sendRequest'
import Loader from 'Components/Loader'
import { useEffect, useState } from 'react'
import EApiMethods from 'Utils/Types/EApiMethods'
import GroupsIcon from 'Assets/Icons/people-blue.svg'
import { useHistory } from 'react-router'
import filterGroupList from './Functions/filterGroupList'
import IGroups from './Types/IFriends'
import './Styles/Groups.scss'
import Button from 'Components/Button'
import ESearchTypes from 'Utils/Types/ESearchTypes'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import PersonList from 'Components/PersonList'
import FormSearch from 'Components/Form/Search'

const Groups = () => {
    const [groupList, setGroupList] = useState<IGroups[] | null>(null)
    const [originalGroupList, setOriginalGroupList] = useState<IGroups[] | null>(null)
    const [displayReadyLoader, setDisplayReadyLoader] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const history = useHistory()

    useEffect(() => {
        const getGroupList = async () => {
            const result = await sendRequest(EApiMethods.GET, '/groups/all')

            setGroupList(result)

            setOriginalGroupList(result)

            setDisplayReadyLoader(true)

            return setTimeout(() => {
                setDisplayReadyLoader(false)
            }, 1000);
        }

        getGroupList()
    }, [])

    const onUpdateSearchQuery = (value: string) => {
        const filteredFriendList = filterGroupList(originalGroupList, value.toLowerCase())

        setGroupList(filteredFriendList)

        return setSearchQuery(value)
    }

    if (!groupList) {
        return <Loader icon={GroupsIcon} />
    }

    if (displayReadyLoader) {
        return <Loader icon={GroupsIcon} ready />
    }

    const onClickGroup = (name: string) => {
        return history.push(`/group/${name}`)
    }

    const emptyGroupList = (
        <div className='empty-groups'>
            <p>Your group list is empty.</p>
            <Button
                value='Find new group'
                onClick={() => history.push(`/search/${ESearchTypes.GROUP}`)}
                type={EButtonTypeList.GHOST_BLUE}
            />
        </div>
    )

    return (
        <div className='group-page-wrapper'>
            <div className='header'>
                <h1>Groups</h1>
                <FormSearch
                    searchQuery={searchQuery}
                    setSearchQuery={onUpdateSearchQuery}
                />
            </div>
            <PersonList
                list={groupList}
                onClickResult={onClickGroup}
                noResultContent={emptyGroupList}
                displayGroup
            />
        </div>
    )
}

export default Groups