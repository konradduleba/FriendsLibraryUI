export default interface IDefaultOptions {
    selectedValue?: string | number;
    onChange: (value: string | number) => void;
    label: string | JSX.Element;
    value: string | number;
}