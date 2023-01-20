import {v1} from "uuid";

type MessageType = {
    id: string,
    message: string
}
type DialogType = {
    id: string,
    name: string
}
type PostType = {
    id: string,
    message: string,
    likesCount: number
}

type ProfilePageType = {
    post: Array<PostType>
}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SideBarType = {}

type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType,
    sidebar: SideBarType
}

let state = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi, how are you?", likesCount:12},
            {id: v1(), message: 'It\'s my first post ', likesCount:23},
            {id: v1(), message: "Blablabla", likesCount:3},
            {id: v1(), message: "Dada", likesCount:6},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Petr'},
            {id: v1(), name: 'Alina'},
            {id: v1(), name: 'Olya'},
            {id: v1(), name: 'Katya'},
            {id: v1(), name: 'Max'},
            {id: v1(), name: 'Oleg'}
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your sutra'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
        ]
    },
    sidebar: {}
}

export default state;