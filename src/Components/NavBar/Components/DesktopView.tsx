import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import { useHistory, useLocation } from 'react-router'

const DesktopView = () => {
    const history = useHistory()
    const { pathname } = useLocation()

    const onClickLogIn = () => {
        return history.push('/login')
    }

    return (
        <>
            {pathname !== '/login' && <Button
                type={EButtonTypeList.GHOST_BLUE}
                value='Log In'
                onClick={onClickLogIn}
            />}
        </>
    )
}

export default DesktopView