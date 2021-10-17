import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import FormCheckbox from 'Components/Form/Checkbox'
import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import React from 'react'

const Login = (): JSX.Element => {

    return (
        <div>
            <Button
                value='test'
                onClick={() => console.log('test')}
                type={EButtonTypeList.PRIMARY}
            />
            <FormCheckbox
                value={true}
                onChange={() => console.log('checkbox')}
                header='tst'
            />
            <FormInput
                value='test'
                onChange={() => console.log('input')}
                type={EInputTypes.PASSWORD}
            />
        </div>
    )
}

export default Login