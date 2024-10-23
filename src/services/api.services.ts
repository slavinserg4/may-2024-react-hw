import axios from "axios";
import {IPost} from "../models/IFormPost";
import {IFormProps} from "../models/IPost";

const axiosInstanse = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
})



export const apiService = {
    post: {
        savePost: async (dataFromForm: IFormProps): Promise<IPost> => {
            const {data} = await axiosInstanse.post<IPost>('/posts', dataFromForm);
            return data;

        }
    }
}
