import React, {useContext} from 'react';
import {MyContext} from "../ContextProvider";

const PostsPage = () => {
    let context = useContext(MyContext)
    return (
        <div>
            {context.PostSlice.allPosts.map((post)=>(<div>{post.title}</div>))}
        </div>
    );
};

export default PostsPage;