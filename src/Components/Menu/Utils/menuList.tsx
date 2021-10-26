import IMenuList from "../Types/IMenuList";
import HomeIcon from 'Assets/Icons/home.svg'
import UserIcon from 'Assets/Icons/user.svg'
import FriendIcon from 'Assets/Icons/contact-book.svg'
import GroupsIcon from 'Assets/Icons/people.svg'
import PartiesIcon from 'Assets/Icons/mystery-box.svg'
import MessagesIcon from 'Assets/Icons/message.svg'
import SettingsIcon from 'Assets/Icons/settings.svg'
import PrivacyIcon from 'Assets/Icons/privacy.svg'
import SearchIcon from 'Assets/Icons/search.svg'
import InviteIcon from 'Assets/Icons/invite.svg'
import EarthIcon from 'Assets/Icons/earth.svg'
import HomeWhiteIcon from 'Assets/Icons/home-white.svg'
import SearchWhiteIcon from 'Assets/Icons/search-white.svg'
import InviteWhiteIcon from 'Assets/Icons/invite-white.svg'
import EarthWhiteIcon from 'Assets/Icons/earth-white.svg'
import UserWhiteIcon from 'Assets/Icons/user-white.svg'
import FriendsWhiteIcon from 'Assets/Icons/contact-book-white.svg'
import GroupsWhiteIcon from 'Assets/Icons/people-white.svg'
import PartiesWhiteIcon from 'Assets/Icons/mystery-box-white.svg'
import MessageWhiteIcon from 'Assets/Icons/message-white.svg'
import SettingsWhiteIcon from 'Assets/Icons/settings-white.svg'
import PrivacyWhiteIcon from 'Assets/Icons/privacy-white.svg'

export const menuList: IMenuList[] = [{
    icon: HomeIcon,
    path: '/home',
    title: 'Home',
    whiteIcon: HomeWhiteIcon
},
{
    icon: SearchIcon,
    path: '/search',
    title: 'Search',
    whiteIcon: SearchWhiteIcon
},
{
    icon: InviteIcon,
    path: '/invite-list',
    title: 'Invite List',
    whiteIcon: InviteWhiteIcon
},
{
    icon: EarthIcon,
    path: '/global',
    title: 'Global',
    whiteIcon: EarthWhiteIcon
},
{
    icon: UserIcon,
    path: '/my-profile',
    title: 'Profile',
    whiteIcon: UserWhiteIcon
},
{
    icon: FriendIcon,
    path: '/friends',
    title: 'Friends',
    whiteIcon: FriendsWhiteIcon
},
{
    icon: GroupsIcon,
    path: '/groups',
    title: 'Groups',
    whiteIcon: GroupsWhiteIcon
},
{
    icon: PartiesIcon,
    path: '/parties',
    title: 'Parties',
    whiteIcon: PartiesWhiteIcon
},
{
    icon: MessagesIcon,
    path: '/messages',
    title: 'Messages',
    whiteIcon: MessageWhiteIcon
},
{
    icon: SettingsIcon,
    path: '/settings',
    title: 'Settings',
    whiteIcon: SettingsWhiteIcon
},
{
    icon: PrivacyIcon,
    path: '/my-privacy',
    title: 'Privacy',
    whiteIcon: PrivacyWhiteIcon
}]