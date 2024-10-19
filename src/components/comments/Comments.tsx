import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {apiService} from "../../services/api.service";
import User from "../user/User";
import Comment from "../comment/comment";

const Comments = () => {
    const[comments, setComments] = useState<IUser[]>([]);
    useEffect(() => {
        apiService.userService.getAll<IUser[]>('/comments',()=> {}).then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments.map(comm => <Comment item={comm} key={comm.id}/>)
            }
        </div>
    );
};

export default Comments;