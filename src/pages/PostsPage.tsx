import React, {useEffect} from 'react';
import {postSliceActions, useAppDispatch, useAppSelector, userSliceActions} from "../redux/store";
import {Link} from "react-router-dom";
import CommentsOfPostsPage from "./CommentsOfPostsPage";

const PostsPage = () => {
    let postSliceState = useAppSelector(state => state.postPart)
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);
    return (
        <ul>
            {
                postSliceState.posts.map((post)=><li>{post.title}</li>)
            }

        </ul>
    );
};

export default PostsPage;