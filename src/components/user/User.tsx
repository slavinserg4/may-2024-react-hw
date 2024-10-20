import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {Link, useLocation} from "react-router-dom";
import UserDetail from "../userDetail/UserDetail";




interface UserProps {
    item:IUser

};
const User:FC<UserProps> = ({item}) => {
    return (
        <div>
            <Link state={{data:item}} to={item.id.toString()}>{item.name}</Link>

        </div>
    );
};

export default User;