import {addPostAC, ChangeNewTextAC, profileReducer} from "./profile-reducer";
import {ChangeNewTextMessageAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";

export  type MessagesType = {
    id:number
    message:string
}
export type DialogsType = {
    id:number
    name:string
}
export  type PostsType = {
    id:number
    message:string
    likesCount:number
}
export type DialogsPageType = {
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
    newMessageText: string
}
export  type ProfilePageType = {
    messageForNewPost: string
    posts:Array<PostsType>
}
export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}

export type ActionTypes =ReturnType<typeof addPostAC> | ReturnType<typeof ChangeNewTextAC> | ReturnType<typeof sendMessageAC> | ReturnType<typeof ChangeNewTextMessageAC>

export type StoreType = {
    _state: RootStateType
    changeNewText:(newText: string)=> void
    addPost:(newText: string)=> void
    subscribe:(callback: () => void)=> void
    _onChange:()=> void
    getState:()=> RootStateType
    dispatch:(action: ActionTypes) => void
    changeNewTextMessage:(changeNewTextMessage: string) => void
}

export const store: StoreType = {
    _state: {
    profilePage: {
        messageForNewPost: "",
        posts:[
            {id: 1, message:'Hi', likesCount: 12},
            {id: 2, message:'How are you', likesCount: 3},
            {id: 3, message:'Cool', likesCount: 1}
        ]
    },
    dialogsPage: {
        dialogs:[
            {id:1, name: 'Yulia'},
            {id:2, name: 'Kirill'},
            {id:3, name: 'Mary'},
            {id:4, name: 'Viki'},
            {id:5, name: 'Nikita'}
        ],
        messages:[
            {id:1, message: 'Hi'},
            {id:2, message: 'What?'},
            {id:3, message: 'I live in Krasnodar'},
            {id:4, message: 'Sorry'},
            {id:5, message: 'Bye'},
        ],
        newMessageText: ""
    }
},
    _onChange(){

    },
    changeNewText(newText: string){
        this._state.profilePage.messageForNewPost = newText;
        this._onChange();
    },
    changeNewTextMessage(newMessageText: string){
        this._state.dialogsPage.newMessageText = newMessageText;
        this._onChange();
    },
    addPost(postText: string){
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._onChange();
    },
    subscribe(callback: () => void){
        this._onChange = callback;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        // console.log(this._state.profilePage)
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._onChange();
    }
}

