import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import { useState } from 'react'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import moveToTopSmoothly from 'Utils/Functions/moveToTopSmoothly'
import useWindowSize from 'Utils/Functions/useWindowSize'
import SearchHeader from './Components/Header'
import SearchBar from './Components/SearchBar'
import ISearchList from './Types/ISearchList'
import PersonList from 'Components/PersonList'
import { useHistory } from 'react-router'
import './Styles/Search.scss'

const Search = () => {
    const [searchList, setSearchList] = useState<ISearchList[] | null>(null)
    const history = useHistory()
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    const noResultInfo = <p>No results, try another one</p>

    const onClickResult = (username: string, isThatMe?: boolean) => {
        return history.push(isThatMe ? '/my-profile' : `/people/${username}`)
    }

    return (
        <div className='search-page-wrapper'>
            <SearchHeader />
            <SearchBar setSearchList={setSearchList} />
            <PersonList
                list={searchList}
                noResultContent={noResultInfo}
                onClickResult={onClickResult}
                title='Results'
                displayHeader
            />
            {searchList && isMobileView && <Button
                value='Back to Search'
                onClick={moveToTopSmoothly}
                type={EButtonTypeList.PRIMARY}
            />}
        </div>
    )
}

export default Search