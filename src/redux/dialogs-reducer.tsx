import {ActionTypes, DialogsPageType} from "./store";


const CHANGE_NEW_TEXT_MESSAGE = "CHANGE-NEW-TEXT-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    switch(action.type){
        case CHANGE_NEW_TEXT_MESSAGE:

            state.newMessageText = action.newMessageText;

            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = "";
            state.messages.push({id:6, message: newMessage});
            return state;
        default:
            return state;
    }
}
export const sendMessageAC = (newMessage: string) =>{
    return{
        type: SEND_MESSAGE,
        postText: newMessage
    } as const
}
export const ChangeNewTextMessageAC = (newMessageText: string) =>{
    return{
        type: CHANGE_NEW_TEXT_MESSAGE,
        newMessageText: newMessageText
    } as const
}