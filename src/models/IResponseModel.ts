import {IUsersModel} from "./IUsersModel";

export interface IResponseModel{
    users:IUsersModel[],
    total:number,
    skip:number,
    limit:number
}