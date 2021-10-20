import React from 'react'
import SelectionIcon from 'Assets/Icons/tic.svg'
import IOptions from '../Types/IOptions'

const Options = ({ options, selectedValue, onSelectOption }: IOptions) => (
    <div className='options-container'>
        {options.map(({ label, value }) => (
            <div className='single-option' onClick={() => onSelectOption(value)} key={value}>
                <p>{label}</p>
                {selectedValue === value && <img src={SelectionIcon} alt='selected' />}
            </div>
        ))}
    </div>
)

export default Options