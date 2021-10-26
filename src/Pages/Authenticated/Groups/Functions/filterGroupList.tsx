import IGroups from "../Types/IFriends"
const filterGroupList = (friendList: IGroups[] | null, query: string): IGroups[] | null => {
    const filteredList = friendList && friendList.filter(({ name }) => {
        const _name = name.toLowerCase()

        return _name.includes(query)
    })

    return filteredList
}

export default filterGroupList