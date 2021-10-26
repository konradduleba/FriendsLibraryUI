import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import InputValidatorMessages from 'Pages/Global/Register/Components/InputValidatorMessages'
import parseDateToSelectedFormat from 'Utils/Functions/parseDateToSelectedFormat'
import { EParseDateMethods } from 'Utils/Types/EParseDateMethods'
import IAccountInfo from 'Utils/Types/IAccountInfo'
import { EParentKeys } from '../Types/EParentKeys'
import IValidators from '../Types/IValidators'

interface IAccount {
    accountInfo: IAccountInfo;
    isEditing: boolean;
    goThroughtValidators: (key: string, parentKey: EParentKeys, value: string) => void;
    validators: IValidators
}

const AccountInfo = ({ accountInfo, isEditing, goThroughtValidators, validators }: IAccount) => {
    const { lastUpdate, name, lastname, memberSince } = accountInfo

    if (isEditing) {
        return (
            <div className='account-content'>
                <div className='input-container'>
                    <FormInput
                        value={name}
                        onChange={value => goThroughtValidators('name', EParentKeys.ACCOUNT_INFO, value)}
                        type={EInputTypes.TEXT}
                        header='Name'
                    />
                    <InputValidatorMessages inputValidator={validators.name} />
                </div>
                <div className='input-container'>
                    <FormInput
                        value={lastname}
                        onChange={value => goThroughtValidators('lastname', EParentKeys.ACCOUNT_INFO, value)}
                        type={EInputTypes.TEXT}
                        header='Lastname'
                    />
                    <InputValidatorMessages inputValidator={validators.lastname} />
                </div>
                <div className='single-info'>
                    <p>Member since</p>
                    <p>{parseDateToSelectedFormat(memberSince, EParseDateMethods.DDMMMYYYY_HHMM)}</p>
                </div>
                <div className='single-info'>
                    <p>Last update</p>
                    <p>{parseDateToSelectedFormat(lastUpdate, EParseDateMethods.DDMMMYYYY_HHMM)}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='account-content'>
            <div className='single-info'>
                <p>Name</p>
                <p>{name}</p>
            </div>
            <div className='single-info'>
                <p>Lastname</p>
                <p>{lastname}</p>
            </div>
            <div className='single-info'>
                <p>Member since</p>
                <p>{parseDateToSelectedFormat(memberSince, EParseDateMethods.DDMMMYYYY_HHMM)}</p>
            </div>
            <div className='single-info'>
                <p>Last update</p>
                <p>{parseDateToSelectedFormat(lastUpdate, EParseDateMethods.DDMMMYYYY_HHMM)}</p>
            </div>
        </div>
    )
}

export default AccountInfo