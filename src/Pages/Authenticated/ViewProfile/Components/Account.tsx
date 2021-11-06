import parseDateToSelectedFormat from 'Utils/Functions/parseDateToSelectedFormat'
import { EParseDateMethods } from 'Utils/Types/EParseDateMethods'
import IAccountInfo from 'Utils/Types/IAccountInfo'

interface IAccount {
    accountInfo: IAccountInfo;
}

const AccountInfo = ({ accountInfo }: IAccount) => {
    const { lastUpdate, name, lastname, memberSince } = accountInfo

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