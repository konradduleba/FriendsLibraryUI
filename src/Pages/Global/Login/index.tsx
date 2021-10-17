import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import FormCheckbox from 'Components/Form/Checkbox'
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
        </div>
    )
}

export default Login