import IPicture from "../Types/IPicture"
import ImageDragAndDrop from "Components/ImageDragAndDrop"
import '../Styles/Picture.scss'

const Picture = ({ picture, name, lastname, isEditing, profilePicture, setProfilePicture }: IPicture) => {
    if (!isEditing) {
        return (
            <div className='picture-wrapper'>
                <div className='picture'>
                    <img src={picture} alt={`${name} ${lastname}`} />
                </div>
                <p>{name} {lastname}</p>
            </div>
        )
    }

    return (
        <div className='picture-wrapper editing'>
            <ImageDragAndDrop
                currentFile={picture}
                setUploadedFile={setProfilePicture}
                uploadedFile={profilePicture}
                componentId='profile-pic'
            />
        </div>
    )
}

export default Picture