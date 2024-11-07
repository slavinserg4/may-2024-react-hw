import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment";
import {getComments} from "../../services/api.service";

type CommentSliceType = {
    comments: IComment[];
    comment: IComment | null;

}

export const commentInitState: CommentSliceType = {
    comments: [],
    comment: null
}

export const loadComments = createAsyncThunk('userSlice/loadComments', async (_, thunkAPI) => {
    try {
        let commentsFromAPI = getComments()
        return thunkAPI.fulfillWithValue(commentsFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});


export let commentSlice = createSlice({
    name: 'commentsSlice',
    initialState: commentInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action: PayloadAction<any>) => {
                console.log('You have problem with CommentSlice ');
            })

});