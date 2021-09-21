import React, {ChangeEvent} from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {NewStoreType} from "../../redux/redux-store";

type PropsType= {

    sendMessage: () => void
    changeNewTextMessage: (text: string) => void
    dialogsPage: NewStoreType
}
export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogsPage.dialogsReducer.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messageElements = props.dialogsPage.dialogsReducer.messages.map(m => <Message id={m.id} message={m.message} />);
    let newMessageElementsText = props.dialogsPage.dialogsReducer.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextMessage(e.currentTarget.value)
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
