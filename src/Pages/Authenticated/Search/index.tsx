import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import { useState } from 'react'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import moveToTopSmoothly from 'Utils/Functions/moveToTopSmoothly'
import useWindowSize from 'Utils/Functions/useWindowSize'
import SearchHeader from './Components/Header'
import Results from './Components/Results'
import SearchBar from './Components/SearchBar'
import ISearchList from './Types/ISearchList'
import './Styles/Search.scss'

const Search = () => {
    const [searchList, setSearchList] = useState<ISearchList[] | null>(null)
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    return (
        <div className='search-page-wrapper'>
            <SearchHeader />
            <SearchBar setSearchList={setSearchList} />
            <Results list={searchList} />
            {searchList && isMobileView && <Button
                value='Back to Search'
                onClick={moveToTopSmoothly}
                type={EButtonTypeList.PRIMARY}
            />}
        </div>
    )
}

export default Search