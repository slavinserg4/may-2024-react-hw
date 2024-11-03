import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {getComments, getPosts, getUsers} from "../services/api.services";
import {MyContext} from "../ContextProvider";

const HomePage = () => {
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
            Home Page
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
                }}></MyContext.Provider>
            }
        </div>
    );
};

export default HomePage;