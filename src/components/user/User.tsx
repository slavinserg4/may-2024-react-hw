import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {Link, useLocation} from "react-router-dom";




interface UserProps {
    item:IUser

};
const User:FC<UserProps> = ({item,}) => {
        let returnUser = useLocation<IUser>(item);
    return (
        <div>
            <Link to={item.id.toString()}>{item.name}</Link>
        </div>
    );
};

export default User;