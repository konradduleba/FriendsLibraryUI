import { Link } from "react-router-dom"
import IPictureAndOwner from "../Types/IPictureAndOwner"
import '../Styles/Picture.scss'

const PictureAndOwner = ({ owner, picture }: IPictureAndOwner) => {
    const { name, lastname, username } = owner

    return (
        <div className='group-picture'>
            <div className='picture'>
                <img src={picture} alt='' />
            </div>
            <h1>Created by</h1>
            <Link to={`/people/${username}`}>{name} {lastname}</Link>
        </div>
    )
}

export default PictureAndOwner