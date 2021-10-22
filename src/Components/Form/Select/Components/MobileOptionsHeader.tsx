import IMobileOptionsHeader from "../Types/IMobileOptionsHeader";
import CancelIcon from 'Assets/Icons/cancel-icon.svg'

const MobileOptionsHeader = ({ header, onCloseOptions }: IMobileOptionsHeader) => (
    <div className='mobile-options-header'>
        <p>{header}</p>
        <div onClick={() => onCloseOptions()}>
            <img src={CancelIcon} alt='close' />
        </div>
    </div>
)

export default MobileOptionsHeader