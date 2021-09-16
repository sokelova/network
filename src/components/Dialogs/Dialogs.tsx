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

type PropsType= {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    dispatch: (action: ActionTypes) => void
    changeNewTextMessageCallback: (changeNewTextMessage: string) => void
}
export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messageElements = props.messages.map(m => <Message id={m.id} message={m.message} />);
    let newMessageElementsText = props.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC(props.newMessageText));
    }

    let onNewMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangeNewTextMessageAC( e.currentTarget.value))
    }

    return <div className={s.dialogs}>
        <div className={s.dialog_user}>
            {dialogsElements}
        </div>

        <div className={s.messages}>
            <div>{messageElements}</div>
            <div>
                <textarea
                    placeholder="Enter your message"
                    value={newMessageElementsText}
                    onChange={onNewMessageTextChange}
                ></textarea>
            </div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
    </div>
}
