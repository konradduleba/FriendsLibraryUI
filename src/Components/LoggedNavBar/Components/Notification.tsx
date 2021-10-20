import React, { MouseEvent, useState } from 'react'
import BellIcon from 'Assets/Icons/bell.svg'
import BellWhiteIcon from 'Assets/Icons/bell-white.svg'
import DefaultPicture from 'Assets/Images/user-default-picture.png'
import INotification from '../Types/INotification'
import { ENotificationStatus } from '../Types/ENotificationStatus'
import NotificationList from './NotificationList'
import '../Styles/Notification.scss'

const testNotificationList = [{
    id: 'asdasdasda',
    status: ENotificationStatus.NEW,
    date: new Date(),
    icon: DefaultPicture,
    title: 'Konrad send you a message',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum?'
},
{
    id: 'asdasdasda123',
    status: ENotificationStatus.NEW,
    date: new Date(),
    icon: DefaultPicture,
    title: 'Jacek send you a message',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum?'
},
{
    id: 'asdasdasda444',
    status: ENotificationStatus.OLD,
    date: new Date(),
    icon: DefaultPicture,
    title: 'Natalia invited you to join your friend list',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum?.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, alias.'
},
{
    id: 'asdasdasda44',
    status: ENotificationStatus.NEW,
    date: new Date(),
    icon: DefaultPicture,
    title: 'Konrad send you a message',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum?'
},
{
    id: 'asdasdasda123111',
    status: ENotificationStatus.NEW,
    date: new Date(),
    icon: DefaultPicture,
    title: 'Jacek send you a message',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum?'
},
{
    id: 'asdasdasda44455',
    status: ENotificationStatus.OLD,
    date: new Date(),
    icon: DefaultPicture,
    title: 'Natalia invited you to join your friend list',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum?.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, alias.'
}]

const Notification = ({ notificationNumber }: INotification) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const onNotificationHandlerClick = () => {
        return setIsActive(!isActive)
    }

    const onNotificationClick = (event: MouseEvent, id: string) => {
        event.stopPropagation()
        console.log('test', id)
    }

    return (
        <div className={`notification-wrapper ${isActive ? 'active' : ''}`} onClick={onNotificationHandlerClick} tabIndex={1} onBlur={() => setIsActive(false)}>
            <img src={isActive ? BellWhiteIcon : BellIcon} alt='notification bell' />
            {testNotificationList.length && <span className='notification-dot'></span>}
            {isActive && (
                <div className='notification-list-container'>
                    <NotificationList list={testNotificationList} onClick={onNotificationClick} />
                </div>
            )}
        </div>
    )
}

export default Notification
