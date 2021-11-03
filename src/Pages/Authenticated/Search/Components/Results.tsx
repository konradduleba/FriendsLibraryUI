import { useHistory } from "react-router"
import IResults from "../Types/IResults"
import ArrowIcon from 'Assets/Icons/arrow-in-the-circle.svg'
import useWindowSize from "Utils/Functions/useWindowSize"
import checkIsMobileView from "Utils/Functions/checkIsMobileView"

const Results = ({ list }: IResults) => {
    const history = useHistory()
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    if (!list) {
        return null
    }

    if (!list.length) {
        return (
            <div className='result-container'>
                <p className='title'>Results</p>
                <div className='content no-results'>
                    <p>No results, try another one</p>
                </div>
            </div>
        )
    }

    const onClickResult = (isThatMe: boolean, username: string) => {
        return history.push(isThatMe ? '/my-profile' : `/people/${username}`)
    }

    return (
        <div className='result-container'>
            <p className='title'>Results</p>
            <div className='content'>
                {list.map(({ id, lastname, picture, isThatMe, name, username }) => (
                    <div className={`single-result ${isThatMe ? 'my-profile' : ''}`} key={id} onClick={() => isMobileView ? onClickResult(isThatMe, username) : null}>
                        <div className='picture-container'>
                            <img src={picture} alt='' />
                        </div>
                        <p>{name} {lastname}</p>
                        <div className='view-person-container' onClick={() => onClickResult(isThatMe, username)}>
                            <img
                                src={ArrowIcon}
                                alt='view'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Results