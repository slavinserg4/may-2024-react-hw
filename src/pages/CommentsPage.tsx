import React, {useContext, useEffect} from 'react';
import {useStore} from "../store";
import {getComments} from "../services/api.services";

const CommentsPage = () => {
    let {commentSlice:{allComments, loadComments}} = useStore()
    useEffect(() => {
        getComments().then(comm=>loadComments(comm))
    }, []);

    return (
        <ul>
            {allComments.map(comm=>(<li key={comm.id}>{comm.body}</li>))}
        </ul>
    );
};

export default CommentsPage;