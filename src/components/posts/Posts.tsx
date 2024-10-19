import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {apiService} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import Post from "../post/Post";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        apiService.userService.getAll<IPost[]>('/posts',()=> {}).then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Posts;