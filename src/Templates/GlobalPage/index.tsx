import React, { MutableRefObject, ReactNode } from 'react'
import './GlobalPageTemplate.scss'

interface IGlobalPageTemplate {
    children: ReactNode;
    reference?: MutableRefObject<HTMLDivElement | null>
    information: string;
}

const GlobalPageTemplate = ({ children, reference, information }: IGlobalPageTemplate) => (
    <div className='global-template-page-wrapper'>
        <div className='information' ref={reference}>
            <p>{information}</p>
        </div>
        <div className='content'>
            {children}
        </div>
    </div>
)

export default GlobalPageTemplate