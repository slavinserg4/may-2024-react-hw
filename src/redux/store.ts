
import {configureStore, createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers, userSlice} from "./UserSlice/UserSlice";
import {loadPosts, postSlice} from "./PostSlice/PostSlice";
import {commentSlice, loadComments} from "./CommentSlice/CommentSlice";


export const userSliceActions = {...userSlice.actions, loadUsers}
export const postSliceActions = {...postSlice.actions, loadPosts}
export const commentSliceActions = {...commentSlice.actions, loadComments}


export let store = configureStore({
    reducer: {
        userPart: userSlice.reducer,
        postPart: postSlice.reducer,
        commentPart: commentSlice.reducer
    }
});

export let useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export let useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
