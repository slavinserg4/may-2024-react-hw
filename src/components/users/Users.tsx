import React, {FC, useEffect, useState} from 'react';
import User from "../user/User";
import {IUsersModel} from "../../models/IUsersModel";
import {userService} from "../../services/api.services";

type UsersProps = {
    lift: (id: number) => void

}
const Users: FC<UsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUsersModel[]>([]);
    useEffect(() => {

        const getUsers = async () => {
            setUsers(await userService.getUsers());
        }

        getUsers();


        return () => {
            console.log('useEffect done');
        }
    }, []);




    return (
        <div>
            {
                users.map(value => <User key={value.id} lift={lift} item={value}/>)
            }
        </div>
    );
};

export default Users;