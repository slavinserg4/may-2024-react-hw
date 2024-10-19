import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface CommProps {
    item:IUser
}
const Comment:FC<CommProps> = ({item}) => {
    return (
        <div>
            Name - {item.name},
            <span>id:{item.id}</span>,
        </div>
    );
};

export default Comment;