import Button from "Components/Button"
import EButtonTypeList from "Components/Button/Types/EButtonTypeList"
import MessageToTheUser from "Components/MessageToTheUser"
import checkIsMobileView from "Utils/Functions/checkIsMobileView"
import useWindowSize from "Utils/Functions/useWindowSize"
import IGroupHeader from "../Types/IGroupHeader"

const GroupHeader = ({ name, amIOwner, belong, description, messageToTheUser }: IGroupHeader) => {
    const buttonValue = amIOwner ? 'Delete group' : belong ? 'Leave group' : 'Join to this group'
    const classStatus = amIOwner ? 'delete' : belong ? 'leave' : 'join'
    const { isSuccess, message } = messageToTheUser
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    return (
        <div className='group-header-container'>
            <div className='info'>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className={`options ${classStatus}`}>
                {!isMobileView &&
                    <div className='message-container'>
                        <MessageToTheUser
                            isSuccess={isSuccess}
                            message={message}
                        />
                    </div>}
                <Button
                    onClick={() => console.log('click')}
                    type={EButtonTypeList.PRIMARY}
                    value={buttonValue}
                />
            </div>
        </div>
    )
}

export default GroupHeader