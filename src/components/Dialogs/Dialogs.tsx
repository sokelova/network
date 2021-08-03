import React from "react";
import {DialogItem} from "./DialogItem";

// import s from './Dialogs.module.css';
// import {DialogItem} from "./DialogItem";


// type DialogsType = {
//     id: string
//     name: string
// }
//
// type MessageType ={
//     message: string
// }

export const Dialogs = () => {

    // let messagesTable = [
    //     {id:1, name:"Dimon"},
    //     {id:2, name:'Jon'},
    //     {id:3, name:'Kitty'},
    //     {id:4, name:'Den'}
    // ]

    return <div>
        <div>

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
        {/*<div className={s.messages}>*/}
        {/*    <div className={s.message}>*/}
        {/*        <Message message='Hi' />*/}
        {/*    </div>*/}
        {/*    <div className={s.message}>*/}
        {/*        <Message message='Were going to the sea today' />*/}
        {/*    </div>*/}
        {/*    <div className={s.message}>*/}
        {/*        <Message message='Ok)' />*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
}
