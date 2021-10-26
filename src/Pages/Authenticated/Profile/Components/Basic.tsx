import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import parseDateToSelectedFormat from 'Utils/Functions/parseDateToSelectedFormat'
import { EParseDateMethods } from 'Utils/Types/EParseDateMethods'
import IBasicInfo from 'Utils/Types/IBasicInfo'
import { EParentKeys } from '../Types/EParentKeys'

interface IBasic {
    basicInfo: IBasicInfo;
    isEditing: boolean;
    onUpdateProfileData: (key: string, parentKey: EParentKeys, value: string | Date) => void;
}

const BasicInfo = ({ basicInfo, onUpdateProfileData, isEditing }: IBasic) => {
    const { birthday, city, school, sex, status } = basicInfo

    if (isEditing) {
        return (
            <div className='basic-content'>
                <FormInput
                    header='Birthday'
                    onChange={value => onUpdateProfileData('birthday', EParentKeys.BASIC_INFO, value)}
                    type={EInputTypes.DATE}
                    value={birthday ? parseDateToSelectedFormat(birthday, EParseDateMethods.YYYY_MM_DD) : ''}
                    placeholder='When is your birthday'
                />
                <FormInput
                    header='City'
                    onChange={value => onUpdateProfileData('city', EParentKeys.BASIC_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={city ? city : ''}
                    placeholder='Where you live?'
                />
                <FormInput
                    header='School'
                    onChange={value => onUpdateProfileData('school', EParentKeys.BASIC_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={school ? school : ''}
                    placeholder='Where you study?'
                />
                <FormInput
                    header='Status (e.g student)'
                    onChange={value => onUpdateProfileData('status', EParentKeys.BASIC_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={status ? status : ''}
                    placeholder='What is your current status?'
                />
                <FormInput
                    header='Sex'
                    onChange={value => onUpdateProfileData('sex', EParentKeys.BASIC_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={sex ? sex : ''}
                    placeholder='What is your sex?'
                />
            </div>
        )
    }

    return (
        <div className='basic-content'>
            <div className='single-info'>
                <p>Birthday</p>
                <p>{birthday ? parseDateToSelectedFormat(birthday, EParseDateMethods.DDMMMYYY) : '-'}</p>
            </div>
            <div className='single-info'>
                <p>City</p>
                <p>{city ? city : '-'}</p>
            </div>
            <div className='single-info'>
                <p>School</p>
                <p>{school ? school : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Status</p>
                <p>{status ? status : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Sex</p>
                <p>{sex ? sex : '-'}</p>
            </div>
        </div>
    )
}

export default BasicInfo