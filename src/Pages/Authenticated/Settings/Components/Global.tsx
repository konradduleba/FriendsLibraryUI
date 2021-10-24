import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import InputValidatorMessages from 'Pages/Global/Register/Components/InputValidatorMessages'
import React from 'react'
import IContent from '../Types/IContent'

const Global = ({ settings, goThroughtValidators, validators }: IContent) => {
    const { name, lastname, email } = settings

    return (
        <div className='tab-content-wrapper'>
            <div className='tab-header'>
                <h1>Global Settings</h1>
                <p>Change contact email, your credentials and username which can be used to display your profile</p>
            </div>
            <div className='input-container'>
                <FormInput
                    value={email ? email : ''}
                    onChange={value => goThroughtValidators('email', value)}
                    type={EInputTypes.TEXT}
                    header='Contact Email'
                />
                <InputValidatorMessages inputValidator={validators.email} />
            </div>
            <div className='input-container'>
                <FormInput
                    value={name}
                    onChange={value => goThroughtValidators('name', value)}
                    type={EInputTypes.TEXT}
                    header='Name'
                />
                <InputValidatorMessages inputValidator={validators.name} />
            </div>
            <div className='input-container'>
                <FormInput
                    value={lastname}
                    onChange={value => goThroughtValidators('lastname', value)}
                    type={EInputTypes.TEXT}
                    header='Lastname'
                />
                <InputValidatorMessages inputValidator={validators.lastname} />
            </div>
        </div>
    )
}

export default Global