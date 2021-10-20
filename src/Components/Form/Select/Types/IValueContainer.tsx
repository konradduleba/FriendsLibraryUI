export default interface IValueContainer {
    isActive: boolean;
    value?: string | number | null;
    toggleOpening: (value?: boolean) => void;
    valueLabel?: string;
}