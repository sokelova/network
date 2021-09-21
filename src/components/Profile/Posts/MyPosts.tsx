import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {ActionTypes, PostsType, store} from "../../../redux/store";
import {addPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";

type PropsType = {
    addPost: () => void
    ChangeNewText: (newText: string) => void
    newPostText: string
    posts: Array<PostsType>
    // dispatch: (action: ActionTypes) => void
}

export const MyPosts = (props: PropsType) => {
    const onAddPost = () => {
        props.addPost();
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.ChangeNewText(e.currentTarget.value);
    }
    return <div>
        <div>
            New post
        </div>
        <div>
            <textarea value={props.newPostText} onChange={newTextChangeHandler}></textarea>
            <button onClick={onAddPost}>Add Post</button>
        </div>
        MyPosts
        <div className={s.posts}>
            {props.posts.map(p =>
                <div className={s.post} key={p.id}>
                    <div className={s.message_post}>{p.message}</div>
                    <div className={s.likes}>like {p.likesCount}</div>
                </div>
            )}
        </div>
    </div>
}
