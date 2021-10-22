import ISingleOption from "Components/Form/Select/Types/ISingleOption"

export const defaultPrivacyOptions: ISingleOption[] = [{
    label: 'Only Me',
    value: 'Only Me'
},
{
    label: 'My Friends',
    value: 'My Friends'
},
{
    label: 'Everyone',
    value: 'Everyone'
}]

export const defaultPrivacyOptionsExtended: ISingleOption[] = [{
    label: 'Everyone',
    value: 'Everyone'
},
{
    label: 'Friends of Friends',
    value: 'Friends of Friends'
}]