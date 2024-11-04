import React, {useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {getComments, getPosts, getUsers} from "../services/api.services";
import {MyContext} from "../ContextProvider";

const HomePage = () => {

    
    return (
        <div>
            Home Page

        </div>
    );
};

export default HomePage;