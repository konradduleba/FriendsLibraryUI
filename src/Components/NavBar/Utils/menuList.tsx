import IMenuList from "../Types/IMenuList";
import SignInIcon from 'Assets/Icons/sign-in.svg';
import RegisterIcon from 'Assets/Icons/register.svg';
import FaqIcon from 'Assets/Icons/faq.svg';
import DocsIcon from 'Assets/Icons/docs.svg'
import InfoIcon from 'Assets/Icons/info.svg'
import PrivacyIcon from 'Assets/Icons/privacy.svg'
import PrivacyWhiteIcon from 'Assets/Icons/privacy-white.svg'
import SignInWhiteIcon from 'Assets/Icons/sign-in-white.svg'
import RegisterWhiteIcon from 'Assets/Icons/register-white.svg'
import FaqWhiteIcon from 'Assets/Icons/faq-white.svg'
import DocsWhiteIcon from 'Assets/Icons/docs-white.svg'
import InfoWhiteIcon from 'Assets/Icons/info-white.svg'

export const menuList: IMenuList[] = [{
    icon: SignInIcon,
    label: 'Log In',
    path: '/login',
    whiteIcon: SignInWhiteIcon
},
{
    icon: RegisterIcon,
    label: 'Register',
    path: '/register',
    whiteIcon: RegisterWhiteIcon
},
{
    icon: FaqIcon,
    label: 'FAQ',
    path: '/faq',
    whiteIcon: FaqWhiteIcon
},
{
    icon: DocsIcon,
    label: 'Terms',
    path: '/terms',
    whiteIcon: DocsWhiteIcon
},
{
    icon: PrivacyIcon,
    label: 'Privacy',
    path: '/privacy',
    whiteIcon: PrivacyWhiteIcon
},
{
    icon: InfoIcon,
    label: 'About',
    path: '/about',
    whiteIcon: InfoWhiteIcon
}]