import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUserInfo} from "../../services/api.service";
import User from "../user/User";
import Users from "../users/Users";
import UsersPage from "../../pages/UsersPage";


interface UserDetailProp{
    item:IUser
    children?: React.ReactNode;
}

const UserDetail:FC<UserDetailProp> = ({item}) => {
    const[usersdetail, setusersdetail] = useState<IUser>();
    return (
        <div>
            {usersdetail?.id} <br/> {usersdetail?.name} <br/> {usersdetail?.username}

        </div>


    );
};

export default UserDetail;