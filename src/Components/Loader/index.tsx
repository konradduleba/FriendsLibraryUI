import React from 'react'
import './Loader.scss'

interface ILoader {
    icon: string;
    colorBar?: string;
    ready?: Boolean;
}

const Loader = ({ icon, colorBar, ready }: ILoader) => (
    <div className='loader-wrapper'>
        <div className='content'>
            <img src={icon} alt="loader" />
            <div className={`loader ${ready ? 'ready' : ''}`}>
                <div className='loading-bar' style={{ backgroundColor: colorBar }}></div>
            </div>
        </div>
    </div>
)

export default Loader