import axios from "axios";
import {IUser} from "../models/IUser";
import {BaseResponseType} from "../models/BaseResponseType";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";


const axiosInstance = axios.create({
    baseURL:"https://dummyjson.com",
    headers:{}
})



export const getUsers = async (): Promise<IUser[]> => {
    let {data: {users}} = await axiosInstance.get<BaseResponseType & { users: IUser[] }>('/users');
    return users
}
export const getPosts = async (): Promise<IPost[]> => {
    let {data: {posts}} = await axiosInstance.get<BaseResponseType & { posts: IPost[] }>('/posts');
    return posts
}
export const getComments = async (): Promise<IComment[]> => {
    let {data: {comments}} = await axiosInstance.get<BaseResponseType & { comments: IComment[] }>('/comments');
    return comments
}
