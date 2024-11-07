import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        let usersFromAPI = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json());
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
                console.log(action.payload);
                // sendErrorLog()

            })

});
