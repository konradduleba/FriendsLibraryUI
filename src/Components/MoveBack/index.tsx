import MoveBackIcon from 'Assets/Icons/move-back.svg'
import { useHistory } from 'react-router'
import './MoveBack.scss'

const MoveBack = () => {
    const history = useHistory()

    return (
        <div className='move-back-container'>
            <div className='back-content' onClick={() => history.goBack()}>
                <img src={MoveBackIcon} alt='' />
                <p>Back</p>
            </div>
        </div>
    )
}

export default MoveBack