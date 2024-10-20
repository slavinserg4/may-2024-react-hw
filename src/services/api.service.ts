import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComments";

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

export const getPostsOfUser = async (user: IUser):Promise<IPost[]>=> {
    let response = await axiosInstance.get<IPost[]>('/posts', {
        params: {userId: user.id}});
    return response.data;
}
export const getCommentsOfPost = async (post: IPost):Promise<IComment[]>=> {
    let response = await axiosInstance.get<IComment[]>('/comments', {
        params: {Id: post.id}});
    return response.data;
}







