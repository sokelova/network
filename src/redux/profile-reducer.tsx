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

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {
                ...state,
                messageForNewPost: "",
                posts: [...state.posts, newPost]
            }
        case CHANGE_NEW_TEXT:
            return {
                ...state,
                messageForNewPost: action.newText
            }

        default:
            return state;
    }
}
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const ChangeNewTextAC = (newText: string) =>{
    return{
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}