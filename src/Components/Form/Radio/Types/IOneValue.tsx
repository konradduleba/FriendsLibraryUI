export default interface IOneValue {
    label: string | JSX.Element;
    value: string | number;
    additionalContent?: boolean | JSX.Element;
}