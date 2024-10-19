import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import Posts from "../posts/Posts";
interface UserProps {
    item:IUser
}
const User:FC<UserProps> = ({item}) => {
    return (
        <div>
            Name - {item.name},
            <span>id:{item.id}</span>,
            <button onClick={()=>{
            }}>To posts of this user</button>
        </div>
    );
};

export default User;