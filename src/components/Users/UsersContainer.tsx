import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {NewStoreType} from "../../redux/redux-store";

type MapStateToPropsType =
    {
    users: Array<UsersType>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
}
export type UsersAll = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: NewStoreType): MapStateToPropsType => {
    return {
        users: state.usersReducer.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (user: Array<UsersType>) =>{
            dispatch(setUsersAC(user))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)