import '../Styles/Picture.scss'

interface IPicture {
    picture: string;
    name: string;
    lastname: string;
}

const Picture = ({ picture, name, lastname }: IPicture) => (
    <div className='picture-wrapper'>
        <div className='picture'>
            <img src={picture} alt='' />
        </div>
        <p>{name} {lastname}</p>
    </div>
)

export default Picture