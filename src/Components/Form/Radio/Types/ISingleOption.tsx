export default interface ISingleOption {
    selectedValue?: string | number;
    onChange: (value: string | number) => void;
    options: [{
        label: string | JSX.Element;
        value: string | number;
        additionalContent?: boolean | JSX.Element;
    }]
}
