import {ActionTypes, PostsType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT";


let initialState = {
    messageForNewPost: "",
    posts:[
        {id: 1, message:'Hi', likesCount: 12},
        {id: 2, message:'How are you', likesCount: 3},
        {id: 3, message:'Cool', likesCount: 1}
    ]
}

export const  profileReducer = (state:ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
    switch(action.type){
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }

            state.posts.push(newPost);
            state.messageForNewPost = "";
            return state;
        case CHANGE_NEW_TEXT:
            state.messageForNewPost = action.newText;
            return state
        default:
            return state;
    }
}
export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const ChangeNewTextAC = (newText: string) =>{
    return{
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}