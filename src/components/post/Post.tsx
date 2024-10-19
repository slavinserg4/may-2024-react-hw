import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
interface IProps{
    item:IPost
}
const Post:FC<IProps> = ({item}) => {
    return (
        <div>
            Title - {item.title},
            Id:{item.id}
        </div>
    );
};

export default Post;