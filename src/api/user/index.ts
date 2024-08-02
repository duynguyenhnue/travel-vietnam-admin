import { request } from "../request";

export const getUsers = async (page: number, show: number, search: string) => {
    const data = await request('get', '', `users?page=${page}&show=${show}&search=${search}`)
    return data;
};