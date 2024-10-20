import axios from "axios";
import {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});


const getAll = async <T, >(endpoint: string, callbackFn?: () => void): Promise<T> => {
    const {data} = await axiosInstance.get<T>(endpoint);
    return data;

}
export const apiService = {
    userService: {
        getAll
    },
    postService: {
        getAll
    },

    commentService: {
        getAll
    },
}

export const getUserInfo = async (user: IUser):Promise<IUser>=> {
    let response = await axiosInstance.get<IUser>('/users', {
        params: {userId: user.id}});
    return response.data;
}







