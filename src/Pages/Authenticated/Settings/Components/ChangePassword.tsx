import FormInput from "Components/Form/Input";
import EInputTypes from "Components/Form/Input/Types/EInputTypes";
import InputValidatorMessages from "Pages/Global/Register/Components/InputValidatorMessages";
import checkIfCanUpdatePassword from "../Functions/checkIfCanUpdatePassword";
import { EDandDTypes } from "../Types/EDandDTypes";
import IExpandedOption from "../Types/IExpandedOption";
import Options from "./Options";

const ChangePassword = ({ password, goThroughtValidators, passwordValidator, repeatPasswordValidator, onClickSubmit, setIsActive, repeatPassword, currentPassword, currentPasswordValidator }: IExpandedOption) => (
    <div className='delete-container'>
        <h1>Make sure that the passwords match </h1>
        <p className='description'>You will be logged off after password change.</p>
        <div className='input-container'>
            <FormInput
                value={currentPassword ? currentPassword : ''}
                onChange={value => goThroughtValidators('password', 'current', value)}
                type={EInputTypes.PASSWORD}
                header='Current password'
            />
            <InputValidatorMessages inputValidator={currentPasswordValidator ? currentPasswordValidator : []} />
        </div>
        <div className='input-container'>
            <FormInput
                value={password}
                onChange={value => goThroughtValidators('new-password', 'password', value, repeatPassword, currentPassword)}
                type={EInputTypes.PASSWORD}
                header='Password'
            />
            <InputValidatorMessages inputValidator={passwordValidator} />
        </div>
        <div className='input-container'>
            <FormInput
                value={repeatPassword ? repeatPassword : ''}
                onChange={value => goThroughtValidators('new-password', 'repeat', value, password, currentPassword)}
                type={EInputTypes.PASSWORD}
                header='Repeat password'
            />
            <InputValidatorMessages inputValidator={repeatPasswordValidator ? repeatPasswordValidator : []} />
        </div>
        <Options
            onClickSubmit={onClickSubmit}
            setIsActive={setIsActive}
            confirmValue='Change password'
            rejectValue='I don’t need to change the password'
            deactivateButton={!checkIfCanUpdatePassword(passwordValidator, repeatPasswordValidator, currentPasswordValidator)}
            type={EDandDTypes.CHANGE_PASSWORD}
        />
    </div>
)

export default ChangePassword