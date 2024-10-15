import {IPostModel} from "./IPostModel";

export interface IResponsePostsModel {
    posts: IPostModel,
    skip: number,
    limit: number,
    total: number
}