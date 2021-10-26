import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import InputValidatorMessages from 'Pages/Global/Register/Components/InputValidatorMessages'
import IContactInfo from 'Utils/Types/IContactInfo'
import { EParentKeys } from '../Types/EParentKeys'
import IValidators from '../Types/IValidators'

interface IContact {
    contactInfo: IContactInfo;
    isEditing: boolean;
    goThroughtValidators: (key: string, parentKey: EParentKeys, value: string) => void;
    validators: IValidators
}

const ContactInfo = ({ contactInfo, isEditing, goThroughtValidators, validators }: IContact) => {
    const { email, phone } = contactInfo

    if (isEditing) {
        return (
            <div className='contact-content'>
                <div className='input-container'>
                    <FormInput
                        value={email ? email : ''}
                        onChange={value => goThroughtValidators('email', EParentKeys.CONTACT_INFO, value)}
                        type={EInputTypes.TEXT}
                        header='Email'
                    />
                    <InputValidatorMessages inputValidator={validators.email} />
                </div>
                <div className='input-container'>
                    <FormInput
                        value={phone ? phone : ''}
                        onChange={value => goThroughtValidators('phone', EParentKeys.CONTACT_INFO, value)}
                        type={EInputTypes.TEXT}
                        header='Phone'
                    />
                    <InputValidatorMessages inputValidator={validators.phone} />
                </div>
            </div>
        )
    }

    return (
        <div className='account-content'>
            <div className='single-info'>
                <p>Email</p>
                <p>{email ? email : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Phone</p>
                <p>{phone ? phone : '-'}</p>
            </div>
        </div>
    )
}

export default ContactInfo