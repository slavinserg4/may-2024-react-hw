import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";
import User from "../components/user/User";
import Users from "../components/users/Users";


const UsersPage = () => {

    return (
        <div>
            {
               <Users/>
            }
        </div>
    );
};

export default UsersPage;