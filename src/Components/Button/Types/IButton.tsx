import EButtonTypeList from "./EButtonTypeList";

export default interface IButton {
    value: string | JSX.Element;
    onClick: () => void;
    disabled?: boolean;
    type: EButtonTypeList;
    image?: string;
    imageDescription?: string;
}