import React, {useEffect, useState} from 'react';
import Menu from "../components/menu/Menu";
import {Outlet} from "react-router-dom";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {getComments, getPosts, getUsers} from "../services/api.services";



const MainLayout = () => {
    return (
        <div>

                    <Menu/>
                    <hr/>
                    <Outlet/>

        </div>
    );
};

export default MainLayout;