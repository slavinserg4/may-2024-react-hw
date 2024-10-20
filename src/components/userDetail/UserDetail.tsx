import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../user/User";
import Users from "../users/Users";
import UsersPage from "../../pages/UsersPage";
import {useLocation} from "react-router-dom";
import {IPost} from "../../models/IPost";
import {getPostsOfUser} from "../../services/api.service";
import PostsOfUser from "../postofuser/PostsOfUser";


interface UserDetailProp{
    item:any
    children?: React.ReactNode;
}

const UserDetail:FC<UserDetailProp> = ({item}) => {
    const [posts, setposts] = useState<IPost[]>([])
    useEffect(() => {
        getPostsOfUser(item).then(value => setposts(value));
    }, []);
    return (
        <div>
            <h3>User:</h3>
            <br/>
            {item.id} {item.username} {item.name} {item.phone}
            <hr/>
            <h3>Posts:</h3>
            <br/>
            {posts.map(value => <PostsOfUser key={value.id} item={value}/>)}
        </div>


    );
};

export default UserDetail;