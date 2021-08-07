import React from "react";

type PropsType = {
    message: string
}
export const Message = (props: PropsType) => {
    return <div>
        <span>{props.message}</span>
    </div>
}
