import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {ActionTypes, PostsType, store} from "../../../redux/store";
import {addPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";

type PropsType = {
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    message: string
    posts: Array<PostsType>
    dispatch: (action: ActionTypes) => void
}

export const MyPosts = (props: PropsType) => {
    const addPost = () => {
        props.dispatch(addPostAC(props.message))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewTextAC(e.currentTarget.value));
    }
    return <div>
        <div>
            New post
        </div>
        <div>
            <textarea value={props.message} onChange={newTextChangeHandler}></textarea>
            <button onClick={addPost}>Add Post</button>
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
