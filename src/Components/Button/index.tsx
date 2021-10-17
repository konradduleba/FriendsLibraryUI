import React from 'react'
import ImageDisplay from './Components/ImageDisplay'
import IButton from './Types/IButton'
import './Styles/Button.scss'

const Button = (props: IButton) => {
    const { value, onClick, disabled, type } = props

    return (
        <div className='button-wrapper'>
            <button onClick={onClick} disabled={disabled} className={type}>
                <ImageDisplay {...props} />
                {value}
            </button>
        </div>
    )
}

export default Button