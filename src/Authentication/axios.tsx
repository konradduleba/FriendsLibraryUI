import axios, { AxiosError } from 'axios';

const baseURL = process.env.REACT_APP_SERVER_API;

const axiosInstance = axios.create({
    baseURL
})

const logoutOn401 = ({ response }: AxiosError) => {
    if (response && response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return Promise.reject(response);
}

axiosInstance.interceptors.response.use(response => response, logoutOn401)

export default axiosInstance;