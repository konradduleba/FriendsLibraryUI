import sendRequest from "Authentication/sendRequest";
import { TokenContext } from "Context/Token";
import { createContext, useContext, useEffect, useState } from "react";
import EApiMethods from "Utils/Types/EApiMethods";
import ICredentials from "./Types/ICredentials";
import IUserData from "./Types/IUserData";
import IUseUserData from "./Types/IUseUserData";

export const UserDataContext = createContext<IUserData>({});

export const UseUserData = ({ children }: IUseUserData) => {
    const [userData, setUserData] = useState<ICredentials | undefined>(undefined)
    const { isLoggedIn } = useContext(TokenContext)

    useEffect(() => {
        const getUserData = async () => {
            if (!isLoggedIn) {
                return null
            }

            return updateUserData()
        }

        getUserData()
    }, [isLoggedIn])

    const updateUserData = async () => {
        const userData = await sendRequest(EApiMethods.GET, '/user/self');

        if (!userData) {
            return null
        }

        return setUserData(userData)
    }

    return (
        <UserDataContext.Provider value={{ userData }}>
            {children}
        </UserDataContext.Provider>
    )
}