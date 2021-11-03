import ArrowIcon from 'Assets/Icons/arrow-in-the-circle.svg'
import IDisplayGroups from '../Types/IDisplayGroups';

const DisplayGroups = ({ list, isMobileView, onClickResult }: IDisplayGroups) => {
    if (!list) {
        return null
    }

    return (
        <div className='list-container'>
            {list.map(({ id, picture, name }) => (
                <div className='single-result' key={id} onClick={() => isMobileView ? onClickResult(id) : null}>
                    <div className='picture-container'>
                        <img src={picture} alt='' />
                    </div>
                    <p>{name}</p>
                    <div className='view-person-container' onClick={() => onClickResult(id)}>
                        <img
                            src={ArrowIcon}
                            alt='view'
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayGroups