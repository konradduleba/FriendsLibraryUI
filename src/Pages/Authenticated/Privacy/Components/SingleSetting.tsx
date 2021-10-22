import FormSelect from "Components/Form/Select";
import ISetting from "../Types/ISetting";

const SingleSetting = ({ onUpdateSetting, setting, options, title, keyName }: ISetting) => {
    const onChange = (keyName: string, value: string | number) => {
        if (value === setting) {
            return null
        }

        return onUpdateSetting(keyName, value)
    }

    return (
        <div className='single-setting-container'>
            <FormSelect
                header={title}
                options={options}
                onChange={value => onChange(keyName, value)}
                value={setting}
            />
        </div>
    )
}

export default SingleSetting