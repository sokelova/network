import React from "react";
import {addPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {NewStoreType} from "../../../redux/redux-store";

type PropsType = {
    store: NewStoreType
    state: any
}

export const MyPostsContainer = (props: PropsType) => {
    const addPost = () => {
        props.state.dispatch(addPostAC(props.store.profileReducer.messageForNewPost))
    }
    const onPostChange = (text: string) => {
        props.state.dispatch(ChangeNewTextAC(text));
    }
    return (<MyPosts
        ChangeNewText={onPostChange}
        addPost={addPost}
        posts={props.store.profileReducer.posts}
        newPostText={props.store.profileReducer.messageForNewPost}
    />)
}
