export default interface IOptions {
    options: [{
        label: string;
        value: string | number;
    }];
    selectedValue?: string | number | null;
    onSelectOption: (value: string | number) => void;
}