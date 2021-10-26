import IOneValue from "./IOneValue";

export default interface ISingleOption {
    selectedValue?: string | number;
    onChange: (value: string | number) => void;
    options: IOneValue[]
}
