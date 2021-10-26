import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import IPersonalInfo from 'Utils/Types/IPersonalInfo'
import { EParentKeys } from '../Types/EParentKeys'

interface IPersonal {
    personalInfo: IPersonalInfo;
    isEditing: boolean;
    onUpdateProfileData: (key: string, parentKey: EParentKeys, value: string | Date) => void;
}

const PersonalInfo = ({ personalInfo, isEditing, onUpdateProfileData }: IPersonal) => {
    const { aboutMe, favouriteMovies, favouriteMusic, interestedIn, interests, lookingFor, partner, relationshipStatus } = personalInfo

    if (isEditing) {
        return (
            <div className='basic-content'>
                <FormInput
                    header='Intro'
                    onChange={value => onUpdateProfileData('aboutMe', EParentKeys.PERSONAL_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={aboutMe ? aboutMe : ''}
                    placeholder='Write something about you'
                />
                <FormInput
                    header='Favourite movies'
                    onChange={value => onUpdateProfileData('favouriteMovies', EParentKeys.PERSONAL_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={favouriteMovies ? favouriteMovies : ''}
                    placeholder='What are your favourite movies?'
                />
                <FormInput
                    header='Favourite music'
                    onChange={value => onUpdateProfileData('favouriteMusic', EParentKeys.PERSONAL_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={favouriteMusic ? favouriteMusic : ''}
                    placeholder='What is your favourite music?'
                />
                <FormInput
                    header='Interested in'
                    onChange={value => onUpdateProfileData('interestedIn', EParentKeys.PERSONAL_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={interestedIn ? interestedIn : ''}
                    placeholder='What are you interested in?'
                />
                <FormInput
                    header='Interests'
                    onChange={value => onUpdateProfileData('interests', EParentKeys.PERSONAL_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={interests ? interests : ''}
                    placeholder='What are your interests?'
                />
                <FormInput
                    header='Looking for'
                    onChange={value => onUpdateProfileData('lookingFor', EParentKeys.PERSONAL_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={lookingFor ? lookingFor : ''}
                    placeholder='What are you looking for here?'
                />
                <FormInput
                    header='Partner'
                    onChange={value => onUpdateProfileData('partner', EParentKeys.PERSONAL_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={partner ? partner : ''}
                    placeholder='Do you have a partner?'
                />
                <FormInput
                    header='Relationship status'
                    onChange={value => onUpdateProfileData('relationshipStatus', EParentKeys.PERSONAL_INFO, value)}
                    type={EInputTypes.TEXT}
                    value={relationshipStatus ? relationshipStatus : ''}
                    placeholder='What is your relationship status?'
                />
            </div>
        )
    }

    return (
        <div className='account-content'>
            <div className='single-info'>
                <p>Intro</p>
                <p>{aboutMe ? aboutMe : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Favourite movies</p>
                <p>{favouriteMovies ? favouriteMovies : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Favourite music</p>
                <p>{favouriteMusic ? favouriteMusic : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Interested in</p>
                <p>{interestedIn ? interestedIn : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Interests</p>
                <p>{interests ? interests : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Looking for</p>
                <p>{lookingFor ? lookingFor : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Relationship status</p>
                <p>{relationshipStatus ? relationshipStatus : '-'}</p>
            </div>
            <div className='single-info'>
                <p>Partner</p>
                <p>{partner ? partner : '-'}</p>
            </div>
        </div>
    )
}

export default PersonalInfo