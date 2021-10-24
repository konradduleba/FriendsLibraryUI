import FormInput from "Components/Form/Input";
import EInputTypes from "Components/Form/Input/Types/EInputTypes";
import FormRadio from "Components/Form/Radio";
import InputValidatorMessages from "Pages/Global/Register/Components/InputValidatorMessages";
import checkIfCanDeactivateAccount from "../Functions/checkIfCanDeactivateAccount";
import { EDandDTypes } from "../Types/EDandDTypes";
import IExpandedOption from "../Types/IExpandedOption";
import { deactivationOptions } from "../Utils/deactivationValues";
import DeleteOrDeactivateOptions from "./Options";

const DeactivateAccount = ({ password, goThroughtValidators, passwordValidator, onClickSubmit, setIsActive, selectedDeactivateOption, setSelectedDeactivateOption }: IExpandedOption) => {
    const updateSelectedOptions = (option: number | string) => {
        if (!setSelectedDeactivateOption) {
            return null
        }

        return setSelectedDeactivateOption(option)
    }

    return (
        <div className='delete-container'>
            <h1>Are you sure you want to deactivate your account?</h1>
            <p className='description'>This action is irreversible.</p>
            <div className='deactivation-options'>
                <p>Decide how long do you wanna have your account suspended</p>
                <FormRadio
                    value={selectedDeactivateOption}
                    onChange={updateSelectedOptions}
                    options={deactivationOptions}

                />
            </div>
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
                type={EDandDTypes.DEACTIVATE}
                setIsActive={setIsActive}
                confirmValue='Deactivate account'
                rejectValue='I don’t want to deactivate acount'
                deactivateButton={!checkIfCanDeactivateAccount(passwordValidator, selectedDeactivateOption)}
            />
        </div>
    )
}

export default DeactivateAccount