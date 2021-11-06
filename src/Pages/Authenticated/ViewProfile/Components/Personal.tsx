import IPersonalInfo from 'Utils/Types/IPersonalInfo'

interface IPersonal {
    personalInfo: IPersonalInfo;
}

const PersonalInfo = ({ personalInfo }: IPersonal) => {
    const { aboutMe, favouriteMovies, favouriteMusic, interestedIn, interests, lookingFor, partner, relationshipStatus } = personalInfo

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