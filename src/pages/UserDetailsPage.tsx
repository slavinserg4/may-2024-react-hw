import React from 'react';
import {useLocation} from "react-router-dom";
import UserDetail from "../components/userDetail/UserDetail";

const UserDetailsPage = () => {
    let {state: {data}} = useLocation();
    return (
        <div>
            {
                <UserDetail item={data}/>
            }
        </div>
    );
};

export default UserDetailsPage;