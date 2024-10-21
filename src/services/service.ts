import axios from "axios";
import exp from "node:constants";
import {IResponse} from "../models/IResponse";
import {IUser} from "../models/IUser";

const axiosInstanse = axios.create({
    baseURL:'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
})



export const apiService = {
    getUsers: async (page:number):Promise<IResponse & {users:IUser[]}>=>{
        const skip=(page-1)*30;


        const {data} = await axiosInstanse.get('/users', {params:{skip:skip}});
        return data;
    }
}