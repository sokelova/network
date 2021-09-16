import React from "react";

type PropsType = {
    id: number
    message: string
}
export const Message = (props: PropsType) => {
    return <div>
        <span>{props.message}</span>
    </div>
}
