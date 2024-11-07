import React, {useEffect} from 'react';
import {commentSliceActions, useAppDispatch, useAppSelector, userSliceActions} from "../redux/store";

const CommentsPage = () => {
    let commentSliceState = useAppSelector(state => state.commentPart)
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);
    return (
        <div>
            {
                commentSliceState.comments.map((comm)=><div>{comm.name}</div>)
            }
        </div>
    );
};

export default CommentsPage;