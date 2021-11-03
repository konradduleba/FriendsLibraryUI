import sendRequest from "Authentication/sendRequest"
import Button from "Components/Button"
import EButtonTypeList from "Components/Button/Types/EButtonTypeList"
import FormInput from "Components/Form/Input"
import EInputTypes from "Components/Form/Input/Types/EInputTypes"
import FormSelect from "Components/Form/Select"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import EApiMethods from "Utils/Types/EApiMethods"
import ESearchTypes from "Utils/Types/ESearchTypes"
import checkInitialType from "../Functions/checkInitialType"
import ISearchBar from "../Types/ISearchBar"
import ISearchParams from "../Types/ISearchParams"
import { typeOptions } from "../Utils/typeOptions"

const SearchBar = ({ setSearchList }: ISearchBar) => {
    const { query, type } = useParams<ISearchParams>()
    const [queryType, setQueryType] = useState<ESearchTypes | string | number>(checkInitialType(type))
    const [queryInput, setQueryInput] = useState<string>(query ? query : '')

    useEffect(() => {
        const getResults = async () => {
            return await onSearchQuery()
        }

        query && getResults()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    const onSearchQuery = async () => {
        if (!queryInput) {
            return null
        }

        const data = {
            type: queryType,
            query: queryInput
        }

        const result = await sendRequest(EApiMethods.POST, '/search/query', data)

        return setSearchList(result)
    }

    const onEnterPress = (event: any) => {
        const keyCode = event.key

        if (keyCode !== 'Enter' || !query) {
            return null
        }

        return onSearchQuery()
    }

    return (
        <div className='search-bar-wrapper'>
            <FormSelect
                onChange={option => setQueryType(option)}
                options={typeOptions}
                value={queryType}
                placeholder='Select type of search'
                header='Type of search'
            />
            <FormInput
                onChange={value => setQueryInput(value)}
                type={EInputTypes.TEXT}
                value={queryInput}
                header='Query'
                placeholder="etc name or lastname"
                onKeyPress={event => onEnterPress(event)}
            />
            <Button
                onClick={onSearchQuery}
                type={EButtonTypeList.PRIMARY}
                value='Search'
            />
        </div>
    )
}

export default SearchBar