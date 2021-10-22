import React from 'react'
import ITabContent from '../Types/ITabContent'

const TabContent = ({ activeTab, options }: ITabContent) => {
    if (!options || !options.length) {
        return null
    }

    const selectedTab = options.find(({ name }) => name === activeTab)

    if (!selectedTab) {
        return null
    }

    const { content } = selectedTab

    return (
        <div className='tab-container'>
            {content}
        </div>
    )
}

export default TabContent