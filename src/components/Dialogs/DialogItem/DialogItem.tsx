import React from "react";
import {NavLink} from "react-router-dom";

type DialogsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogsType) => {

    let path = "/dialogs/" + props.id;
    return<div>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}
