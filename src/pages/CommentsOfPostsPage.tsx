import React from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const CommentsOfPostsPage = () => {
    let {posts} = useAppSelector(state => state.postPart)
    let {comments} = useAppSelector(state => state.commentPart)
    let dispatch = useAppDispatch();
    return (
        <div>
            {
                posts.map((post:IPost)=>(
                    <div key={post.id}>
                        <h3>Post: {post.title}</h3>
                        <h3>PostId:{post.id}</h3>
                        <h2>Comments:</h2>
                        <ul>
                            {
                                comments.filter((comm)=>comm.postId===post.id)
                                    .map((comm:IComment)=>(
                                        <li key={comm.id}>PostId: {comm.postId} <br/>
                                            Name: {comm.name} <br/>
                                            Id: {comm.id}
                                        </li>
                                    ))
                            }
                        </ul>
                        <hr/>
                    </div>


                ))






            }
        </div>
    );
};

export default CommentsOfPostsPage;