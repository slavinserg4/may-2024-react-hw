import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import Post from "../post/post";

type PostsProps = {
    posts: IPostModel[];
}
const Posts: FC<PostsProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Posts;