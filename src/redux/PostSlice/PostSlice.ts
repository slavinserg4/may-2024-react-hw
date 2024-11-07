import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost";

    type PostSliceType = {
    posts: IPost[];
    post: IPost | null;

}

export const postInitState: PostSliceType = {
    posts: [],
    post: null
}

export const loadPosts = createAsyncThunk('userSlice/loadPosts', async (_, thunkAPI) => {
    try {
        let postsFromAPI = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json());
        return thunkAPI.fulfillWithValue(postsFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});


export let postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action: PayloadAction<any>) => {
                console.log('You have problem with postSlice ');
            })

});
