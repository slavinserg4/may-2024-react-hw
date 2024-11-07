import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector, userSliceActions} from "../redux/store";

const UsersPage = () => {
    let userSliceState = useAppSelector(state => state.userPart)
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userSliceActions.loadUsers)
    }, []);

    return (
        <div>
            {
                userSliceState.users.map((user)=>user.name)
            }
        </div>
    );
};

export default UsersPage;