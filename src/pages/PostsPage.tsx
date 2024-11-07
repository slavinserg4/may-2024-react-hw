import React, {useEffect} from 'react';
import {postSliceActions, useAppDispatch, useAppSelector, userSliceActions} from "../redux/store";

const PostsPage = () => {
    let postSliceState = useAppSelector(state => state.postPart)
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);
    return (
        <div>
            {postSliceState.posts.map((post)=><div>{post.title}</div>)}
        </div>
    );
};

export default PostsPage;