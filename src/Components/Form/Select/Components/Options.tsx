import React from 'react'
import SelectionIcon from 'Assets/Icons/tic.svg'
import IOptions from '../Types/IOptions'
import MobileOptionsHeader from './MobileOptionsHeader'

const Options = ({ options, selectedValue, onSelectOption, isMobileView, header, toggleOpening }: IOptions) => (
    <div className='options-container'>
        {isMobileView ? (
            <>
                <MobileOptionsHeader header={header} onCloseOptions={toggleOpening} />
                <div className='mobile-options-container'>
                    {options.map(({ label, value }) => (
                        <div className='single-option' onClick={() => onSelectOption(value)} key={value}>
                            <p>{label}</p>
                            {selectedValue === value && <img src={SelectionIcon} alt='selected' />}
                        </div>
                    ))}
                </div>
            </>
        ) :
            options.map(({ label, value }) => (
                <div className='single-option' onClick={() => onSelectOption(value)} key={value}>
                    <p>{label}</p>
                    {selectedValue === value && <img src={SelectionIcon} alt='selected' />}
                </div>
            ))
        }
    </div>
)

export default Options