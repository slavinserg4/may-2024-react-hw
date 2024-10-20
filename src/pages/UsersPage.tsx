import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";
import User from "../components/user/User";
import Users from "../components/users/Users";

interface IProps{
    lift: (user: IUser) => void}
const UsersPage:FC<IProps> = ({lift}) => {

    return (
        <div>
            {
               <Users lift={lift}/>
            }
        </div>
    );
};

export default UsersPage;