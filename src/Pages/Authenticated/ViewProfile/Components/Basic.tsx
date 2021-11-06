import parseDateToSelectedFormat from 'Utils/Functions/parseDateToSelectedFormat'
import { EParseDateMethods } from 'Utils/Types/EParseDateMethods'
import IBasicInfo from 'Utils/Types/IBasicInfo'

interface IBasic {
    basicInfo: IBasicInfo;
}

const BasicInfo = ({ basicInfo }: IBasic) => {
    const { birthday, city, school, sex, status } = basicInfo

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