import ICredentials from "./ICredentials";

export default interface IUserData {
    userData?: ICredentials;
    setUserData?: (data: ICredentials) => void;
}