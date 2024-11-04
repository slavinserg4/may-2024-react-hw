import React, {useContext, useEffect} from 'react';
import {useStore} from "../store";
import {getUsers} from "../services/api.services";


const UsersPage = () => {
    let {userSlice:{loadUsers, allUsers}} = useStore()
    useEffect(() => {
        getUsers().then(users=>loadUsers(users))
    }, []);
    return (
        <ul>
            {allUsers.map(user => (<li key={user.id}>{user.firstName}</li>))}
        </ul>
    );
};

export default UsersPage;