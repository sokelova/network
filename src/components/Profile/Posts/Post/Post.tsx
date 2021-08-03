import React from "react";
import s from './Post.module.css';
import photo from '../../image/foto.png';

type PostType = {
    message: string
}

export const Post = (props: PostType) => {
    return <div>
        <div className={`${s.item} ${s.active}`}>
            <img src={photo}/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    </div>
}
