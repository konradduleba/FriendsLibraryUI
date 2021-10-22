import React from 'react'
import IOptions from '../Types/IOptions'

const TabOptions = ({ options, activeTab, updateActiveTab }: IOptions) => {
    if (!options || !options.length) {
        return null
    }

    return (
        <div className='options-panel-container'>
            {options.map(({ name }) => (
                <div className={`single-option ${activeTab === name ? 'active' : ''}`} key={name} onClick={() => updateActiveTab(name)}>
                    <p>{name}</p>
                </div>
            ))}
        </div>
    )
}

export default TabOptions