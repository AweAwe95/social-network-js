import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts(props) {

    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {props.postsData.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)}
        </div>
    </div>;
}