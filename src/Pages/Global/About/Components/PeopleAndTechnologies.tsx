import InfoBar from 'Components/InfoBar'
import React from 'react'

const PeopleAndTechnologies = () => (
    <InfoBar
        infoTitle='People and technologies'
        description={(<div className='single-info-container people'>
            <div className='list-of-people'>
                <div className='single-person header'>
                    <p>Tech</p>
                    <p>Programmer / Author</p>
                    <p>Stack</p>
                </div>
                <div className='single-person'>
                    <p>Frontend</p>
                    <p>Konrad Dulęba</p>
                    <p>React, TypeScript, SCSS, Axios, Context</p>
                </div>
                <div className='single-person'>
                    <p>Backend</p>
                    <p>Konrad Dulęba</p>
                    <p>NestJS, TypeOrm, MySQL</p>
                </div>
                <div className='single-person'>
                    <p>DevOps</p>
                    <p>Konrad Dulęba</p>
                    <p>Heroku Cloud</p>
                </div>
                <div className='single-person'>
                    <p>Design</p>
                    <p>Inspired by one of the Softnauts's projects</p>
                    <p>Figma</p>
                </div>
            </div>
        </div>)}
        additionalClass='people'
    />
)

export default PeopleAndTechnologies