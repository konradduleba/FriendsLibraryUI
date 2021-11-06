import ICheckInviteStatus from "../Types/ICheckInviteStatus"

const checkInviteStatus = (inviteStatus: boolean, isOnFriendList: boolean): ICheckInviteStatus => {
    if (isOnFriendList) {
        return {
            status: 'Remove from your friend list',
            className: 'remove'
        }
    }

    if (inviteStatus) {
        return {
            status: 'Invite sended',
            className: 'sended'
        }
    }

    return {
        status: 'Invite to join your friend list',
        className: 'invite'
    }
}

export default checkInviteStatus