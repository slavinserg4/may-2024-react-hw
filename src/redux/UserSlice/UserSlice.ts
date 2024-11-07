import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "../../services/api.service";

type UserSliceType = {
    users: IUser[];
    user: IUser | null;

}

const userInitState: UserSliceType = {
    users: [],
    user: null
}

export const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let usersFromAPI = await getUsers()
        return thunkAPI.fulfillWithValue(usersFromAPI);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});


export let userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<any>) => {
                console.log('You have a problem with userSlice');
            })
});
