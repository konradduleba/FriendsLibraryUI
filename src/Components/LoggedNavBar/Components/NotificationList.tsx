import parseDateToSelectedFormat from "Utils/Functions/parseDateToSelectedFormat";
import { EParseDateMethods } from "Utils/Types/EParseDateMethods";
import { ENotificationStatus } from "../Types/ENotificationStatus";
import INotificationList from "../Types/INotificationList";

const NotificationList = ({ list, onClick }: INotificationList) => {
    if (!list || !list.length) {
        return null
    }

    return (
        <>
            {list.map(({ id, icon, title, date, status }) => (
                <div className={`single-notification ${status === ENotificationStatus.NEW ? 'new-message' : ''}`} key={id} onClick={event => onClick(event, id)}>
                    <div className='header'>
                        <p>{status === ENotificationStatus.NEW && 'NEW'}</p>
                        <p>{parseDateToSelectedFormat(date, EParseDateMethods.HHMM)}</p>
                    </div>
                    <div className='notification-content'>
                        <img src={icon} alt='notification' />
                        <div className='description'>
                            <p>{title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default NotificationList