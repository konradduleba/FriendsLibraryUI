export default interface IOptionsWithAdditionalContent {
    selectedValue?: string | number;
    onChange: (value: string | number) => void;
    label: string | JSX.Element;
    value: string | number;
    additionalContent?: boolean | JSX.Element;
}