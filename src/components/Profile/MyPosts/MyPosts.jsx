import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

export function MyPosts(props) {
    const postsElements = props.postsData.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)
    const TextAreaHandler = (e) => {
        props.dispatch(updateNewPostTextAC(e))
    }
    const addPost = () => {
        props.dispatch(addPostAC())
    }

    return <div>
        My posts
        <div>
            <textarea value={props.newPostText} onChange={TextAreaHandler}></textarea>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {postsElements}
        </div>
    </div>;
}