import IFriends from './IFriends'

export default interface IDisplayFriends {
    friends: IFriends[];
    onClickFriend: (value: string) => void;
}