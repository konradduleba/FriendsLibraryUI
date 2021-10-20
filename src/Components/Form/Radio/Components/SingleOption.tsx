import React from 'react'
import IDefaultOptions from '../Types/IDefaultOptions'
import IOptionsWithAdditionalContent from '../Types/IOptionsWithAdditionalContent'
import ISingleOption from '../Types/ISingleOption'

const DefaultOptions = ({ selectedValue, value, onChange, label }: IDefaultOptions) => (
    <>
        <div onClick={() => onChange(value)} className='radio-label'>{label}</div>
        <div className={`radio ${selectedValue === value ? 'active' : ''}`} onClick={() => onChange(value)}>
            {selectedValue === value && <div className='selected'></div>}
        </div>
    </>
)

const OptionsWithAdditionalContent = ({ value, label, selectedValue, onChange, additionalContent }: IOptionsWithAdditionalContent) => (
    <>
        <div className='radio-and-label-container'>
            <div onClick={() => onChange(value)} className='radio-label'>{label}</div>
            <div className={`radio ${selectedValue === value ? 'active' : ''}`} onClick={() => onChange(value)}>
                {selectedValue === value && <div className='selected'></div>}
            </div>
        </div>
        {additionalContent}
    </>
)

const SingleOption = ({ options, selectedValue, onChange }: ISingleOption): JSX.Element | null => {
    if (!options || !options.length) {
        return null
    }

    return (
        <>
            {options.map(({ label, value, additionalContent }) => (
                <div className={`single-option ${additionalContent ? 'additional-content' : ''}`} key={value}>
                    {additionalContent ?
                        <OptionsWithAdditionalContent
                            selectedValue={selectedValue}
                            value={value}
                            onChange={onChange}
                            label={label}
                            additionalContent={additionalContent}
                        />
                        : <DefaultOptions
                            selectedValue={selectedValue}
                            value={value}
                            onChange={onChange}
                            label={label}
                        />
                    }
                </div>
            ))}
        </>
    )
}

export default SingleOption