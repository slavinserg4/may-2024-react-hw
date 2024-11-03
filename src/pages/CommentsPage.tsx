import React, {useContext} from 'react';
import {MyContext} from "../ContextProvider";

const CommentsPage = () => {
    let context = useContext(MyContext)
    return (
        <div>
            {context.CommentSlice.allComments.map((comment)=>(<div>{comment.body}</div>))}
        </div>
    );
};

export default CommentsPage;