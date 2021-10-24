import IOneValue from "./IOneValue";

export default interface IRadio {
    value?: string | number;
    onChange: (value: string | number) => void;
    options: IOneValue[]
}