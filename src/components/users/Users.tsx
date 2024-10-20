import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {apiService, getUserInfo} from "../../services/api.service";
import User from "../user/User";
interface IProps{
    lift: (user: IUser) => void}
const Users:FC<IProps> = ({lift}) => {
    const[users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.userService.getAll<IUser[]>('/users',()=> {}).then(value => setUsers(value));
    }, []);

    return (
        <div>
            {
                users.map(value => <User item={value} lift={lift}/>)

            }
        </div>
    );
};

export default Users;