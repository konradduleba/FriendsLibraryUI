import Button from "Components/Button";
import EButtonTypeList from "Components/Button/Types/EButtonTypeList";
import IHeader from "../Types/IHeader";

const DeleteOrDeactivateHeader = ({ title, description, icon, iconAlt, setIsActive }: IHeader) => (
    <div className='header'>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button
            onClick={() => setIsActive(true)}
            type={EButtonTypeList.IMAGE_PRIMARY}
            value={title}
            image={icon}
            imageDescription={iconAlt}
        />
    </div>
)

export default DeleteOrDeactivateHeader