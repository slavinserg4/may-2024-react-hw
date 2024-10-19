import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CommentsPage from "../pages/CommentsPage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import HomePage from "../pages/HomePage";

export let routes = createBrowserRouter([
    {
        path:'/', element: <MainLayout/>, children:[
            {
                index :true, element:<HomePage/>
            },{
                path:'users', element:<UsersPage/>
            },{
                path:'posts', element:<PostsPage/>
            },{
                path:'comments', element:<CommentsPage/>
            }
        ]
    }
])