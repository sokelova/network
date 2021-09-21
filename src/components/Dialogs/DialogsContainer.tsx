import React, {ChangeEvent} from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {
    ActionTypes,
    DialogsType,
    MessagesType
} from "../../redux/store";
import {ChangeNewTextMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {NewStoreType} from "../../redux/redux-store";

type PropsType= {
    store: NewStoreType
    state: any
}
export const DialogsContainer = (props: PropsType) => {

    let onSendMessageClick = () => {
        props.state.dispatch(sendMessageAC(props.store.dialogsReducer.newMessageText));
    }

    let onNewMessageTextChange = (text: string) => {
        props.state.dispatch(ChangeNewTextMessageAC(text))
    }

    return (<Dialogs sendMessage={onSendMessageClick} dialogsPage={props.store} changeNewTextMessage={onNewMessageTextChange}/>)
}
