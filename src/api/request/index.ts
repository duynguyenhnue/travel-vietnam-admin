import axios from "axios";

export const request = async (method: string, data: any, param: string) => {
    const res = await axios({
        method: method,
        url: `http://localhost:8000/${param}`,
        data: data,
    });
    return res.data;
};