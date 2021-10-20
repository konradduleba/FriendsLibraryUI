import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import { useHistory, useLocation } from 'react-router'
import Information from './Information'

const DesktopView = () => {
    const history = useHistory()
    const { pathname } = useLocation()

    const onClickButton = (path: string) => {
        return history.push(path)
    }

    return (
        <>
            <Information />
            <div className='options'>
                {pathname !== '/login' && <Button
                    type={EButtonTypeList.GHOST_BLUE}
                    value='Log In'
                    onClick={() => onClickButton('/login')}
                />}
                {pathname !== '/register' && <Button
                    type={EButtonTypeList.PRIMARY}
                    value='Register'
                    onClick={() => onClickButton('/register')}
                />}
            </div>
        </>
    )
}

export default DesktopView