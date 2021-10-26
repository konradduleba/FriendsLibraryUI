import IPicture from "../Types/IPicture"
import '../Styles/Picture.scss'

const Picture = ({ picture, name, lastname }: IPicture) => (
    <div className='picture-wrapper'>
        <div className='picture'>
            <img src={picture} alt={`${name} ${lastname}`} />
        </div>
        <p>{name} {lastname}</p>
    </div>
)

export default Picture