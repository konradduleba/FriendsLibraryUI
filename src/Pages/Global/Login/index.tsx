import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import React from 'react'

const Login = (): JSX.Element => {

    return (
        <div>
            <Button
                value='test'
                onClick={() => console.log('test')}
                type={EButtonTypeList.PRIMARY}
            />
        </div>
    )
}

export default Login