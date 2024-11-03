import {createContext} from "react";
import {IUser} from "./models/IUser";
import {IPost} from "./models/IPost";
import {IComment} from "./models/IComment";



type StoreType = {
    UserSlice:{
        allUsers:IUser[],
        user:IUser | null
    },
    PostSlice:{
        allPosts:IPost[],
        post:IPost|null
    },
    CommentSlice:{
        allComments:IComment[],
        comment:IComment|null
    }
}
export let defaultStoreValue:StoreType ={
    UserSlice:{
        allUsers:[],
        user:null
    },
    PostSlice:{
        allPosts:[],
        post:null
    },
    CommentSlice:{
        allComments:[],
        comment:null
    }
}
export let MyContext = createContext<StoreType>(defaultStoreValue)