import ArrowIcon from 'Assets/Icons/arrow-in-the-circle.svg'
import IDisplayPeople from "../Types/IDisplayPeople";
import TicIcon from 'Assets/Icons/tic-green.svg'
import CancelIcon from 'Assets/Icons/cancel-red.svg'

const DisplayPeople = ({ list, isMobileView, onClickResult, onRemoveInvite, onAcceptInvite, invites }: IDisplayPeople) => {
    if (!list) {
        return null
    }

    if (invites) {
        return (
            <div className='list-container'>
                {list.map(({ id, lastname, picture, name, username }) => (
                    <div className='single-invite' key={id}>
                        <div className='picture-container' onClick={() => isMobileView ? onClickResult(username!) : null}>
                            <img src={picture} alt='' />
                        </div>
                        <p onClick={() => isMobileView ? onClickResult(username!) : null}>{name} {lastname}</p>
                        <div className='invite-options-container'>
                            <div className='single-option' onClick={() => onAcceptInvite!(username!)}>
                                <img
                                    src={TicIcon}
                                    alt='view'
                                />
                            </div>
                            <div className='single-option' onClick={() => onRemoveInvite!(username!)}>
                                <img
                                    src={CancelIcon}
                                    alt='view'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className='list-container'>
            {list.map(({ id, lastname, picture, isThatMe, name, username }) => (
                <div className={`single-result ${isThatMe ? 'my-profile' : ''}`} key={id} onClick={() => isMobileView ? onClickResult(username!, isThatMe) : null}>
                    <div className='picture-container'>
                        <img src={picture} alt='' />
                    </div>
                    <p>{name} {lastname}</p>
                    <div className='view-person-container' onClick={() => onClickResult(username!, isThatMe)}>
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

export default DisplayPeople
