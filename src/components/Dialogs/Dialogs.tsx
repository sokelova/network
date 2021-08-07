import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";

export const Dialogs = () => {

    return <div className={s.dialogs}>
        <div className={s.dialog_user}>
            <div>
                <DialogItem id='1' name='Tory'/>
            </div>
            <div>
                <DialogItem id='2' name='Lessy'/>
            </div>
            <div>
                <DialogItem id='3' name='Odri'/>
            </div>
            <div>
                <DialogItem id='4' name='Tony'/>
            </div>
        </div>

        <div className={s.messages}>
            <div className={s.message}>
                <Message message='Hi' />
            </div>
            <div className={s.message}>
                <Message message='Were going to the sea today' />
            </div>
            <div className={s.message}>
                <Message message='Ok)' />
            </div>
        </div>
    </div>
}
