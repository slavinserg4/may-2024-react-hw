import React, {FC} from 'react';
import {IUsersModel} from "../../models/IUsersModel";

type UserProps = {
    item: IUsersModel;
    lift: (id: number) => void
}

const User:FC<UserProps> = ({lift, item}) => {
    return (
        <div key={item.id}>
            {item.username}
            <button onClick={()=>lift(item.id)}>Fetch posts</button>
        </div>
    );
};

export default User;