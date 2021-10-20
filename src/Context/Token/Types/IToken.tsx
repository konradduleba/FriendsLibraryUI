import ILogin from "./ILogin";

export default interface IToken {
    isLoggedIn?: boolean;
    setLoginStatus?: (value: boolean) => void;
    logoutUser?: () => void;
    loginUser?: (credentials: ILogin) => void;
}