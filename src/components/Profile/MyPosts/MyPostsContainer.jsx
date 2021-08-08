import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export function MyPostsContainer(props) {
    const textAreaHandler = (e) => {
        props.dispatch(updateNewPostTextAC(e))
    }
    const addPost = () => {
        props.dispatch(addPostAC())
    }

    return <div>
        <MyPosts postsData={props.postsData} newPostText={props.newPostText} addPost={addPost} textAreaHandler={textAreaHandler}/>
    </div>;
}