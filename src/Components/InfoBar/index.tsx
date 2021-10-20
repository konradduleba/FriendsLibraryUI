import React, { ReactNode } from 'react'
import './InfoBar.scss'

interface IInfoBar {
    infoTitle: string;
    description: ReactNode;
    additionalClass?: string;
}

const InfoBar = ({ infoTitle, description, additionalClass }: IInfoBar) => (
    <div className={`info-container ${additionalClass ? additionalClass : ''}`}>
        <h1>{infoTitle}</h1>
        {description}
    </div>
)

export default InfoBar