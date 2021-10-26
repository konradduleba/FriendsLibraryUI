import IFriends from "Pages/Authenticated/Friends/Types/IFriends";

const displayLimitedFriends = (friendList: IFriends[]): IFriends[] => {
    if (friendList.length < 5) {
        return friendList
    }

    const randomFriends: IFriends[] = []

    while (randomFriends.length < 3) {
        const item = friendList[Math.floor(Math.random() * friendList.length)];

        const doesContainInRandomArray = randomFriends.find(({ id }) => id === item.id)

        if (!doesContainInRandomArray) {
            randomFriends.push(item)
        }
    }

    return randomFriends
}

export default displayLimitedFriends