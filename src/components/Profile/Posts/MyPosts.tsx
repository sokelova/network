import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {PostsType} from "../../../redux/store";


type MyPostPropsType = {
    addPost: () => void
    ChangeNewText: (newText: string) => void
    newPostText: string
    posts: Array<PostsType>
}

export const MyPosts = (props: MyPostPropsType) => {
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
