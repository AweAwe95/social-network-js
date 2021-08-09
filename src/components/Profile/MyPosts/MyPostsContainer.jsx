import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const textAreaHandler = (e) => {
                        store.dispatch(updateNewPostTextAC(e))
                    }
                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    return (
                        <div>
                            <MyPosts postsData={store.getState().profilePageData.postsData}
                                     newPostText={store.getState().profilePageData.newPostText}
                                     addPost={addPost}
                                     textAreaHandler={textAreaHandler}/>
                        </div>
                    )
                }

            }
        </StoreContext.Consumer>
    )
}