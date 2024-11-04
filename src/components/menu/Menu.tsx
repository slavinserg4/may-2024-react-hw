import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
                <li><Link to={'postswithcomments'}>Posts with comments</Link></li>
            </ul>
        </div>
    );
};

export default Menu;