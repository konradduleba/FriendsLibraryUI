import InfoBar from 'Components/InfoBar'
import React from 'react'

const Project = () => (
    <InfoBar
        infoTitle='The Project'
        description={(<div>
            <p>Friends Library  is an online directory that connects people throught all over the world.</p>
            <p>Created as an bachelor degree app by Konrad Dulęba, inspired by "The social network" movie.</p>
        </div>)}
        additionalClass='project'
    />
)

export default Project