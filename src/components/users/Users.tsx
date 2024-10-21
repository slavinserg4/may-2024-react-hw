import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
interface UsersProps{
    users:IUser[]
}
const Users:FC<UsersProps> = ({users}) => {
    return (
        <div>
            {
                users.map(value => (<div>{value.firstName}</div>))
            }
        </div>
    );
};

export default Users;