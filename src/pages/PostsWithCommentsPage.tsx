import {mergePostComments} from "../helpers/helper";
import {useEffect, useState} from "react";
import {IPost} from "../models/IPost";
import {useStore} from "../store";


const PostsWithCommentsPage = () => {
    let {postSlice: {allPosts}, commentSlice: {allComments}} = useStore();
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        let iPosts = mergePostComments(allPosts, allComments);
        console.log(iPosts)
        setPosts(iPosts);
    }, []);

    return (
        <ul>
            {
                posts.map((post) => <li>
                    <div>{post.title}</div>
                    <ol>
                        {
                            post.comments?.map((comment) => (<li key={comment.id}>{comment.id}</li>))
                        }
                    </ol>

                </li>)
            }
        </ul>
    );
};


export default PostsWithCommentsPage;