import EApiMethods from "Utils/Types/EApiMethods";
import axiosInstance from "./axios";

interface EData {
    [key: string]: string | number | Date | null;
}

const sendRequest = (method: EApiMethods, url: string, data?: EData): Promise<any> => axiosInstance({
    method,
    url,
    data
}).then(({ data }) => data).catch(error => error)

export default sendRequest;