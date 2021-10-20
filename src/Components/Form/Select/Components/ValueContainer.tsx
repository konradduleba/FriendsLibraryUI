import React from 'react'
import ChevronUpIcon from 'Assets/Icons/chevron-up.svg'
import SelectionIcon from 'Assets/Icons/tic.svg'
import IValueContainer from '../Types/IValueContainer'

const ValueContainer = ({ isActive, value, toggleOpening, valueLabel }: IValueContainer) => {
    const isOpenSelector = isActive ? 'opened' : ''
    const isPickedSelector = value !== null ? 'selected' : ''

    const containerClassName = `value-container ${isOpenSelector} ${isPickedSelector}`
    const labelClassName = value !== null ? '' : 'placeholder'

    const image = value === null || (value !== null && isActive) ? ChevronUpIcon : SelectionIcon

    return (
        <div className={containerClassName} onClick={() => toggleOpening()}>
            <p className={labelClassName}>{valueLabel}</p>
            <img src={image} alt='arrow' />
        </div>
    )
}

export default ValueContainer