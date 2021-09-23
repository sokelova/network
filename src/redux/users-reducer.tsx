import ava from './../components/Users/image/1551511784_4.jpg';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

type LocationUsers = {
    city: string,
    country: string
}
export type UsersType = {
    id: number,
    photoUrl: string
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationUsers
}
export type RootUsersType = {
    users: Array<UsersType>
}
type ActionTypes =ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState = {
    users:[
        {id: 1, photoUrl: ava, followed: true, fullName:'Yulia', status: "So good!", location: {city: 'Krasnodar', country: 'Russia'}},
        {id: 2, photoUrl: ava, followed: false, fullName:'Roman', status: "I am a boss!", location: {city: 'Minsk', country: 'Belarus'}},
        {id: 3, photoUrl: ava, followed: false, fullName:'Kate', status: "I am a boss too!", location: {city: 'New York', country: 'USA'}}
    ]
}

export const  usersReducer = (state: RootUsersType = initialState, action: ActionTypes): RootUsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollowAC = (userId: number) =>{
    return{
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: Array<UsersType>) =>{
    return{
        type: SET_USERS,
        users
    } as const
}