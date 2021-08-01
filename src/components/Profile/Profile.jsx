import React from "react";
import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {addPost} from "../../redux/state";

export function Profile(props) {
    return (
        <div className={p.content}>
            <div>
                <img src="https://gamemag.ru/images/cache/Reviews/Reviews1726/92f0dfdd74-2_1390x600.jpg"
                     className={p.profilePageImg} alt=""/>
            </div>
            <div>Ava + description</div>
            <MyPosts postsData={props.profilePageData.postsData} addPost={addPost}/>
        </div>
    )
}