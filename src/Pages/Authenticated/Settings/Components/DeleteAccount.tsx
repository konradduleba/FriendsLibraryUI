import FormInput from "Components/Form/Input";
import EInputTypes from "Components/Form/Input/Types/EInputTypes";
import InputValidatorMessages from "Pages/Global/Register/Components/InputValidatorMessages";
import checkIfCanDeleteAccount from "../Functions/checkIfCanDeleteAccount";
import { EDandDTypes } from "../Types/EDandDTypes";
import IExpandedOption from "../Types/IExpandedOption";
import DeleteOrDeactivateOptions from "./Options";

const DeleteAccount = ({ password, goThroughtValidators, passwordValidator, onClickSubmit, setIsActive }: IExpandedOption) => (
    <div className='delete-container'>
        <h1>Are you sure you want to delete your account?</h1>
        <p className='description'>This action is irreversible.</p>
        <div className='input-container'>
            <FormInput
                value={password}
                onChange={value => goThroughtValidators('password', 'password', value)}
                type={EInputTypes.PASSWORD}
                header='Password'
            />
            <InputValidatorMessages inputValidator={passwordValidator} />
        </div>
        <DeleteOrDeactivateOptions
            onClickSubmit={onClickSubmit}
            setIsActive={setIsActive}
            confirmValue='Delete account'
            rejectValue='I don’t want to delete acount'
            deactivateButton={!checkIfCanDeleteAccount(passwordValidator)}
            type={EDandDTypes.DELETE}
        />
    </div>
)

export default DeleteAccount