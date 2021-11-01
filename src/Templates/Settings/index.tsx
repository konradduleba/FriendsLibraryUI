import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import { useState } from 'react'
import TabOptions from './Components/Options'
import TabContent from './Components/TabContent'
import ISettingsTemplate from './Types/ISettingsTemplate'
import useWindowSize from 'Utils/Functions/useWindowSize'
import checkIsMobileView from 'Utils/Functions/checkIsMobileView'
import ContentMobile from './Components/ContentMobile'
import moveToTopSmoothly from 'Utils/Functions/moveToTopSmoothly'
import MessageToTheUser from 'Components/MessageToTheUser'
import './Styles/SettingsTemplate.scss'
import './Styles/SettingsTemplateMobile.scss'

const SettingsTemplate = ({ options, title, onSubmitClick, messageToTheUser, viewsWithoutSubmitButton, page }: ISettingsTemplate) => {
    const [activeTab, setActiveTab] = useState<string>(options && options.length ? options[0].name : '')
    const { isSuccess, message } = messageToTheUser
    const { width } = useWindowSize()
    const isMobileView = checkIsMobileView(width)

    const updateActiveTab = (tab: string) => {
        if (tab === activeTab) {
            return null
        }

        return setActiveTab(tab)
    }

    const isSubmitDisabled = !!(viewsWithoutSubmitButton?.find(cartName => cartName === activeTab))

    const onSubmitClickMobile = () => {
        moveToTopSmoothly()

        return onSubmitClick()
    }

    if (isMobileView === undefined) {
        return null
    }

    if (!isMobileView) {
        return (
            <div className='setting-template-wrapper'>
                <div className='header-and-submit-button'>
                    <h1>{title}</h1>
                    <div className='submit-and-message-to-the-user'>
                        <MessageToTheUser isSuccess={isSuccess} message={message} />
                        <Button
                            onClick={onSubmitClick}
                            type={EButtonTypeList.PRIMARY}
                            value='Submit'
                            disabled={isSubmitDisabled}
                        />
                    </div>
                </div>
                <div className='content-wrapper'>
                    <TabOptions
                        options={options}
                        activeTab={activeTab}
                        updateActiveTab={updateActiveTab}
                    />
                    <TabContent
                        activeTab={activeTab}
                        options={options}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className='setting-template-wrapper-mobile'>
            <MessageToTheUser isSuccess={isSuccess} message={message} />
            <ContentMobile
                options={options}
                onSubmitClickMobile={onSubmitClickMobile}
            />
            {page !== 'settings' && <Button
                onClick={onSubmitClickMobile}
                type={EButtonTypeList.PRIMARY}
                value='Submit'
            />}
        </div>
    )
}

export default SettingsTemplate