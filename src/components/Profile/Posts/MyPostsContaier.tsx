import React from "react";
import {addPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {NewStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {PostsType} from "../../../redux/store";

type MapDispatchToPropsType = {
    addPost: () => void
    ChangeNewText: (newText: string) => void
}
type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}
let mapStateToProps = (state: NewStoreType): MapStateToPropsType => {
    return{
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.messageForNewPost
    }
}
let mapDispatchToProps = (dispatch: Dispatch):  MapDispatchToPropsType => {
    return{
        addPost: () => {
            dispatch(addPostAC());
        },
        ChangeNewText: (newText: string) => {
            dispatch(ChangeNewTextAC(newText));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
