import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IPostModel} from "./models/IPostModel";
import {postService} from "./services/api.services";
import Posts from "./components/posts/Posts";


function App() {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const lift = async (id:number)=>{
        setPosts(await postService.getPostsOfUsers(id))
    };
  return (
    <div>
        <Users lift={lift}/>
        <hr/>
        <Posts posts={posts}/>
        <hr/>
    </div>
  );
}

export default App;
