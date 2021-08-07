type MessagesType = {
    id:number
    message:string
}
type DialogsType = {
    id:number
    name:string
}
type PostsType = {
    id:number
    message:string
    likesCount:number
}
type DialogsPageType = {
    dialogs:Array<DialogsType>
    messages:Array<MessagesType>
}
type ProfilePageType = {
    posts:Array<PostsType>
}
type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
}

let state = {
    profilePage: {
        posts:[
            {id: 1, message:'Hi', likesCount: 12},
            {id: 2, message:'How are you', likesCount: 3},
            {id: 3, message:'Cool', likesCount: 1}
        ]
    },
    dialogsPage: {
        dialogs:[
            {id:1, name: 'Yulia'},
            {id:2, name: 'Kirill'},
            {id:3, name: 'Mary'},
            {id:4, name: 'Viki'},
            {id:5, name: 'Nikita'}
        ],
        messages:[
            {id:1, message: 'Hi'},
            {id:2, message: 'What?'},
            {id:3, message: 'I live in Krasnodar'},
            {id:4, message: 'Sorry'},
            {id:5, message: 'Bye'},
        ]

    }
}

export default state;
