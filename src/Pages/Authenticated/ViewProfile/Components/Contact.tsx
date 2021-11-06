import IContactInfo from 'Utils/Types/IContactInfo'

interface IContact {
    contactInfo: IContactInfo;
}

const ContactInfo = ({ contactInfo }: IContact) => {
    const { email, phone } = contactInfo

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