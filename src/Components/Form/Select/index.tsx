import React, { useEffect, useState } from 'react'
import ErrorInformation from '../ErrorInformation'
import Header from './Components/Header'
import Options from './Components/Options'
import ValueContainer from './Components/ValueContainer'
import ISelect from './Types/ISelect'
import './Styles/Select.scss'
import useWindowSize from 'Utils/Functions/useWindowSize'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'

const FormSelect = ({ value, onChange, options, isRequired, errorMessage, header, headerChildren, placeholder }: ISelect) => {
    const [errorInformation, setErrorInformation] = useState<string | null>(null)
    const [isActive, setIsActive] = useState<boolean>(false)
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    const labelForValue = options.find(singleOption => singleOption.value === value)
    const valueLabel = labelForValue ? labelForValue.label : placeholder

    const toggleOpening = (status?: boolean) => {
        if (status !== undefined) {
            return setIsActive(status)
        }

        return setIsActive(!isActive)
    }

    const onSelectOption = (selectedValue: string | number) => {
        if (selectedValue === value) {
            return null
        }

        onChange(selectedValue)

        return toggleOpening()
    }

    useEffect(() => {
        isRequired && errorMessage && setErrorInformation(errorMessage)
    }, [errorMessage, isRequired])

    if (isMobileView === undefined) {
        return null
    }

    return (
        <div className='form-select-wrapper'>
            <Header title={header}>{headerChildren}</Header>
            <div className='select-container' tabIndex={-1} onBlur={() => toggleOpening(false)}>
                <ValueContainer
                    isActive={isActive}
                    value={value}
                    toggleOpening={toggleOpening}
                    valueLabel={valueLabel}
                />
                {isActive &&
                    <Options
                        options={options}
                        selectedValue={value}
                        onSelectOption={onSelectOption}
                        header={header}
                        isMobileView={isMobileView}
                        toggleOpening={toggleOpening}
                    />
                }
            </div>
            <ErrorInformation errorMessage={errorInformation} />
        </div>
    )
}

export default FormSelect