import axiosInstance from 'Authentication/axios';
import sendRequest from 'Authentication/sendRequest';
import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router';
import EApiMethods from 'Utils/Types/EApiMethods';
import ILogin from './Types/ILogin';
import IToken from './Types/IToken'
import IUseToken from './Types/IUseToken'

export const TokenContext = createContext<IToken>({});

const checkLoginStatus = (): boolean => {
    const token = localStorage.getItem('token');

    return !!token;
}

export const UseToken = ({ children }: IUseToken): JSX.Element => {
    const [isLoggedIn, setLoginStatus] = useState<boolean>(checkLoginStatus());
    const history = useHistory()

    const logoutUser = async () => {
        const { ok } = await sendRequest(EApiMethods.GET, '/user/logout');

        if (!ok) {
            return null
        }

        localStorage.removeItem('token');

        return setLoginStatus(false)
    }

    const loginUser = async (credentials: ILogin) => {
        const data = { ...credentials };

        const token = await sendRequest(EApiMethods.POST, '/user/login', data);

        if (typeof token !== 'string') {
            return token;
        }

        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        localStorage.setItem('token', token);

        setLoginStatus(true);

        return history && history.push('/dashboard')
    }

    return (
        <TokenContext.Provider value={{ isLoggedIn, logoutUser, loginUser }}>
            {children}
        </TokenContext.Provider>
    )
}