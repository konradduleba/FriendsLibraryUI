import React from 'react'
import SingleOption from './Components/SingleOption'
import IRadio from './Types/IRadio';
import './Styles/Radio.scss'

const FormRadio = ({ value, onChange, options }: IRadio): JSX.Element => (
    <div className='form-radio-wrapper'>
        <SingleOption selectedValue={value} onChange={onChange} options={options} />
    </div>
)



export default FormRadio