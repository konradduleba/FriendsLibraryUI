import IIntro from "../Types/IIntro"
import '../Styles/Intro.scss'

const Intro = ({ aboutMe }: IIntro) => (
    <div className='about-me-wrapper'>
        <h1>Intro</h1>
        <p>{aboutMe ? aboutMe : '-'}</p>
    </div>
)

export default Intro