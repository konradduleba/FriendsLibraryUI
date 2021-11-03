import IFriends from "../Types/IFriends"

const filterFriendList = (friendList: IFriends[] | null, query: string): IFriends[] | [] | null => {
    const filteredList = friendList && friendList.filter(({ lastname, username, name }) => {
        const _name = name.toLowerCase()
        const _lastname = lastname.toLowerCase()
        const _username = username.toLowerCase()
        const fullName = `${_name} ${_lastname}`

        return _name.includes(query) || _lastname.includes(query) || _username.includes(query) || fullName.includes(query)
    })

    return filteredList
}

export default filterFriendList