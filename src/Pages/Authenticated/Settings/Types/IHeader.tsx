export default interface IHeader {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
    setIsActive: (value: boolean) => void;
}