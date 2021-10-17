import React from 'react'
import IMessageToTheUser from '../Types/IMessageToTheUser'

const MessageToTheUser = (messageData: IMessageToTheUser) => {
    const { message, isSuccess } = messageData

    if (!message) {
        return null
    }

    return (
        <div className={`${isSuccess ? 'success' : 'error'}-message-container`}>
            <p>{message}</p>
        </div>
    )
}

export default MessageToTheUser