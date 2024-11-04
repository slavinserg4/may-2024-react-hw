
import {useStore} from "../store";
import {useEffect} from "react";
import {getPosts} from "../services/api.services";

const PostsPage = () => {
    let {postSlice:{loadPosts, allPosts}} = useStore()
    useEffect(() => {
        getPosts().then(post=>loadPosts(post));
    }, []);
    return (
        <ul>
            {allPosts.map(posts=>(<li key={posts.id}>{posts.title}</li>))}
        </ul>
    );
};

export default PostsPage;