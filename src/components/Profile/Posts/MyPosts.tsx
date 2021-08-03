import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        MyPosts
        <div>
            New post
        </div>
        <div>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi, now are you?'/>
            <Post message='Exxyyyy!!!'/>
            <Post message='Great day'/>
            <Post message='Were going to the sea today'/>
            <Post message='Presentation of a new phone'/>
        </div>
    </div>
}
