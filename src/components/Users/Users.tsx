import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./users.module.css";

type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
}

export const Users = (props: PropsType) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            : <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}