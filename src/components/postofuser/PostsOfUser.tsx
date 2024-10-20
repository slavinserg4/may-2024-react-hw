import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface PostsProps{
    item:IPost
}

const PostsOfUser:FC<PostsProps> = ({item}) => {

    return (
        <div>
            {item.id} - {item.title} - {item.body} - {item.userId}
        </div>
    );
};

export default PostsOfUser;