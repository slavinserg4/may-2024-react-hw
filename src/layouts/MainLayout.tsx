import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";
import {Provider} from "react-redux";
import {store} from "../redux/store";

const MainLayout = () => {
    return (
        <div>
            <Provider store={store}>
                <Menu/>
                <hr/>
                <Outlet/>
            </Provider>
        </div>
    );
};

export default MainLayout;