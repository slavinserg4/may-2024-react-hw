import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
type PostProps = {
    item: IPostModel;
}
const Post:FC<PostProps> = ({item}) => {
    return (
        <div>
            {item.title}
        </div>
    );
};

export default Post;