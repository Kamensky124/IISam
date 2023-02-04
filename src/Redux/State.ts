import {v1} from "uuid";

export type MessageType = {
    id: string,
    message: string
}

export type DialogType = {
    id: string,
    name: string
}
export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

export type DialogPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string
}

export type SideBarType = {}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogPageType,
    sidebar: SideBarType,
}

export type StoreType = {
    _state: RootStateType,
    changeNewPostText: (newText: string) => void,
    addPost: () => void,
    _onChange: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootStateType
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 12},
                {id: v1(), message: 'It\'s my first post ', likesCount: 23},
                {id: v1(), message: 'Blablabla', likesCount: 3},
                {id: v1(), message: 'Dada', likesCount: 6},
            ],
            newPostText: ""
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
                {id: v1(), message: 'Mersi'},
                {id: v1(), message: 'Lalafa'},
            ]
        },
        sidebar: {}
    },
    changeNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange()
    },
    addPost() {
        const newPost: PostType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._onChange()
    },
    _onChange() {
        console.log("state changed")
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    }
}

export default store;