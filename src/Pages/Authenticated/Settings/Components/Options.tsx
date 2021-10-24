import Button from "Components/Button";
import EButtonTypeList from "Components/Button/Types/EButtonTypeList";
import IOptions from "../Types/IOptions";

const DeleteOrDeactivateOptions = ({ setIsActive, onClickSubmit, confirmValue, rejectValue, deactivateButton, type }: IOptions) => (
    <div className='options'>
        <Button
            type={EButtonTypeList.GHOST_BLUE}
            value={rejectValue}
            onClick={() => setIsActive(false)}
        />
        <Button
            type={EButtonTypeList.PRIMARY}
            value={confirmValue}
            onClick={() => onClickSubmit(type)}
            disabled={deactivateButton}
        />
    </div>
)

export default DeleteOrDeactivateOptions