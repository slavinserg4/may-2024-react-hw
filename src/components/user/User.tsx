import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";




interface UserProps {
    item:IUser
    lift: (user: IUser) => void
};
const User:FC<UserProps> = ({item,lift}) => {

    return (
        <div>
            <Link onClick={()=>{lift(item)}} to={item.id.toString()}>{item.name}</Link>
        </div>
    );
};

export default User;