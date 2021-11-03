import React, { FocusEvent, KeyboardEvent, useState } from 'react'
import SearchIcon from 'Assets/Icons/search.svg'
import SearchWhiteIcon from 'Assets/Icons/search-white.svg'
import CancelIcon from 'Assets/Icons/cancel.svg'
import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import { useHistory } from 'react-router'
import '../Styles/Search.scss'
import ESearchTypes from 'Utils/Types/ESearchTypes'

const Search = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [additionalClass, setAdditionalClass] = useState<string>('')
    const [query, setQuery] = useState<string>('')
    const history = useHistory()

    const clearButton = () => {
        return setQuery('')
    }

    const onClickSearch = () => {
        if (!isActive) {
            return setIsActive(true)
        }

        if (!query) {
            return null
        }

        return history.push(`/search/${ESearchTypes.USER}/${query}`)
    }

    const onUpdateQuery = (value: string) => {
        setAdditionalClass('')

        return setQuery(value)
    }

    const onEnterPress = (event: KeyboardEvent) => {
        const keyCode = event.key

        if (keyCode !== 'Enter' || !query) {
            return null
        }

        return history.push(`/search/${ESearchTypes.USER}/${query}`)
    }

    const onClickOutside = (event: FocusEvent) => {
        const tagName = event.relatedTarget?.tagName

        if (query && tagName !== 'INPUT') {
            return setAdditionalClass('clicked-outside-with-content')
        }
        if (query || tagName === 'INPUT') {
            return setAdditionalClass('')
        }

        setAdditionalClass('')

        return setIsActive(false)
    }

    return (
        <div className={`search-wrapper ${isActive ? 'active' : ''} ${additionalClass}`} tabIndex={1} onBlur={onClickOutside}>
            {isActive && (
                <div className='search-query-container'>
                    <FormInput
                        onChange={onUpdateQuery}
                        value={query}
                        type={EInputTypes.TEXT}
                        placeholder='e.g. Konrad Dulęba'
                        onKeyPress={onEnterPress}
                    />
                    <img src={CancelIcon} alt='clear' className='clear-button' onClick={clearButton} />
                </div>
            )}
            <img src={isActive ? SearchWhiteIcon : SearchIcon} alt='search' className='search-button' onClick={onClickSearch} />
        </div>
    )
}

export default Search