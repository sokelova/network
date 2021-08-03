import React from "react";
import s from './Profile.module.css';
import photo from './image/foto.png';
import {MyPosts} from "./Posts/MyPosts";

export const Profile = () => {
    return <div>
        <div>
            <img className={s.photo} src={photo} />
            <MyPosts />
        </div>
    </div>
}
