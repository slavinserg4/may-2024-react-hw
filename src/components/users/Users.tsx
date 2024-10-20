import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {apiService, getUserInfo} from "../../services/api.service";
import User from "../user/User";
import user from "../user/User";

const Users = () => {
    const[users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.userService.getAll<IUser[]>('/users',()=> {}).then(value => setUsers(value));
    }, []);

    return (
        <div>
            {
                users.map(value => <User item={value} key={value.id}/>)

            }
        </div>
    );
};

export default Users;