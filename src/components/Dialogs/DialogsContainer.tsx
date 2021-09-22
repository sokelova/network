import React from "react";
import {ChangeNewTextMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {NewStoreType} from "../../redux/redux-store";
import { connect } from "react-redux";
import {Dispatch} from "redux";
import {ActionTypes, DialogsPageType, PostsType} from "../../redux/store";

type MapDispatchToPropsType = {
    sendMessage: () => void
    changeNewTextMessage: (text: string) => void
}
type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

let mapStateToProps = (state: NewStoreType): MapStateToPropsType => {
    return{
        dialogsPage: state.dialogsReducer
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return{
        changeNewTextMessage: (text: string) => {
            dispatch(ChangeNewTextMessageAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)