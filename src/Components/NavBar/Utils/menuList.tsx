import IMenuList from "../Types/IMenuList";
import SignInIcon from 'Assets/Icons/sign-in.svg';
import RegisterIcon from 'Assets/Icons/register.svg';
import FaqIcon from 'Assets/Icons/faq.svg';
import DocsIcon from 'Assets/Icons/docs.svg'
import InfoIcon from 'Assets/Icons/info.svg'
import PrivacyIcon from 'Assets/Icons/privacy.svg'

export const menuList: IMenuList[] = [{
    icon: SignInIcon,
    label: 'Log In',
    path: '/login'
},
{
    icon: RegisterIcon,
    label: 'Register',
    path: '/register'
},
{
    icon: FaqIcon,
    label: 'FAQ',
    path: '/faq'
},
{
    icon: DocsIcon,
    label: 'Terms',
    path: '/terms'
},
{
    icon: PrivacyIcon,
    label: 'Privacy',
    path: '/privacy'
},
{
    icon: InfoIcon,
    label: 'About',
    path: '/about'
}]