import React from "react";
import p from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export function Profile(props) {
    return (
        <div className={p.content}>
            <div>
                <img src="https://gamemag.ru/images/cache/Reviews/Reviews1726/92f0dfdd74-2_1390x600.jpg"
                     className={p.profilePageImg} alt=""/>
            </div>
            <div>Ava + description</div>
            <MyPostsContainer postsData={props.profilePageData.postsData}  newPostText={props.profilePageData.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}