import React, {useContext} from 'react';
import {MyContext} from "../ContextProvider";

const UsersPage = () => {
    let context = useContext(MyContext)
    return (
        <div>
            {context.UserSlice.allUsers.map((user)=>(<div>{user.firstName}</div>))}
        </div>
    );
};

export default UsersPage;