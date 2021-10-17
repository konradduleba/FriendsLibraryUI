import Button from 'Components/Button'
import EButtonTypeList from 'Components/Button/Types/EButtonTypeList'
import FormCheckbox from 'Components/Form/Checkbox'
import FormInput from 'Components/Form/Input'
import EInputTypes from 'Components/Form/Input/Types/EInputTypes'
import FormRadio from 'Components/Form/Radio'
import FormSelect from 'Components/Form/Select'
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
            <FormRadio
                onChange={() => console.log('radio')}
                options={[{
                    label: 'test',
                    value: 1,
                }]}
                value={1}
            />
            <FormSelect
                onChange={() => console.log('select')}
                options={[{
                    label: 'test',
                    value: 1
                }]}
                header='test'
                placeholder='select'
                value={null}
            />
        </div>
    )
}

export default Login