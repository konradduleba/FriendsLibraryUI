import IMenuList from "../Types/IMenuList";
import HomeIcon from 'Assets/Icons/home.svg'
import UserIcon from 'Assets/Icons/user.svg'
import MyFriendIcon from 'Assets/Icons/two-users.svg'
import MyGroupsIcon from 'Assets/Icons/three-users.svg'
import MyPartiesIcon from 'Assets/Icons/mystery-box.svg'
import MyMessagesIcon from 'Assets/Icons/message.svg'
import SettingsIcon from 'Assets/Icons/settings.svg'
import PrivacyIcon from 'Assets/Icons/privacy.svg'
import SearchIcon from 'Assets/Icons/search.svg'
import InviteIcon from 'Assets/Icons/invite.svg'
import EarthIcon from 'Assets/Icons/earth.svg'

export const menuList: IMenuList[] = [{
    icon: HomeIcon,
    path: '/dashboard',
    title: 'Home'
},
{
    icon: SearchIcon,
    path: '/search',
    title: 'Search'
},
{
    icon: InviteIcon,
    path: '/invite-list',
    title: 'Invite List'
},
{
    icon: EarthIcon,
    path: '/global',
    title: 'Global'
},
{
    icon: UserIcon,
    path: '/my-profile',
    title: 'My Profile'
},
{
    icon: MyFriendIcon,
    path: '/my-friends',
    title: 'My Friends'
},
{
    icon: MyGroupsIcon,
    path: '/my-groups',
    title: 'My Groups'
},
{
    icon: MyPartiesIcon,
    path: '/my-parties',
    title: 'My Parties'
},
{
    icon: MyMessagesIcon,
    path: '/my-messages',
    title: 'My Messages'
},
{
    icon: SettingsIcon,
    path: '/my-settings',
    title: 'My Account'
},
{
    icon: PrivacyIcon,
    path: '/my-privacy',
    title: 'My Privacy'
}]