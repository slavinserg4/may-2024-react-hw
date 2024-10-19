import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
interface UserProps {
    item:IUser
}
const User:FC<UserProps> = ({item}) => {
    return (
        <div>
            Name - {item.name}
        </div>
    );
};

export default User;