import React, {useEffect, useState} from 'react';
import Menu from "../components/menu/Menu";
import {Outlet} from "react-router-dom";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {getComments, getPosts, getUsers} from "../services/api.services";
import {MyContext} from "../ContextProvider";


const MainLayout = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [posts, setPosts] = useState<IPost[]>([])
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        const allInfo = async () =>{
            let userResponse = await getUsers();
            let postResponse = await getPosts();
            let commentResponse = await getComments()

            setUsers(userResponse);
            setPosts(postResponse);
            setComments(commentResponse);
        }
        allInfo();
    }, []);
    return (
        <div>
            {
                <MyContext.Provider value={{
                    UserSlice: {
                        allUsers: users,
                        user: null
                    },
                    PostSlice: {
                        allPosts: posts,
                        post: null
                    },
                    CommentSlice: {
                        allComments: comments,
                        comment: null
                    }
                }}>
                    <Menu/>
                    <hr/>
                    <Outlet/>
                </MyContext.Provider>
            }
        </div>
    );
};

export default MainLayout;