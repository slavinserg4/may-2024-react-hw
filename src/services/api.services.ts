import axios, {AxiosResponse} from "axios";
import {IUsersModel} from "../models/IUsersModel";
import {IResponseModel} from "../models/IResponseModel";
import {IPostModel} from "../models/IPostModel";
import {IResponsePostsModel} from "../models/IResponsePostsModel";

const axiosInstanse = axios.create({
    baseURL:'https://dummyjson.com/'
});

export const userService = {
    getUsers: async ():Promise<IUsersModel[]> =>{
        let axiosResponse =  await axiosInstanse.get<IResponseModel>('/users');
        let date = axiosResponse.data;
        return date.users;
    }
}
export const postService = {
    getPostsOfUsers:async (id:number)=>{
        let axiosResponse = await axiosInstanse.get<IResponsePostsModel>('/posts', {params:{userID:id}})
        let data = axiosResponse.data;
        return data.posts;
    }
}