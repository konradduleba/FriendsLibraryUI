import EButtonTypeList from "./EButtonTypeList";

export default interface IImageDisplay {
    type: EButtonTypeList;
    image?: string;
    imageDescription?: string;
}