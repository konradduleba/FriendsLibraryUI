export default interface IRadio {
    value?: string | number;
    onChange: (value: string | number) => void;
    options: [{
        label: string | JSX.Element;
        value: string | number;
        additionalContent?: boolean | JSX.Element;
    }]
}