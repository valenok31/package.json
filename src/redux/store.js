import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi! How are you?', liceCount: 2},
                {id: 2, message: 'It`s my first post!', liceCount: 7},
                {id: 3, message: 'Yo', liceCount: 5},
                {id: 4, message: 'Gisha like', liceCount: 22},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How is your it-kama'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Gisha like'},
                {id: 5, message: 'A-tumba-you-you!!!'}
            ],
            newPostText: '',
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Alisa'},
                {id: 3, name: 'Veronika'},
                {id: 4, name: 'Gisha'},
                {id: 5, name: 'Bozon'},
                {id: 6, name: 'Arbuzz'},
                {id: 7, name: 'Barbariska 56'},
            ]
        },
        sidebar: {
            friendsDate: [
                {name: 'Andrey', ava: 'https://cdn-icons-png.flaticon.com/512/921/921061.png'},
                {name: 'Sara', ava: 'https://cdn-icons-png.flaticon.com/512/921/921068.png'},
                {name: 'Nike', ava: 'https://cdn-icons-png.flaticon.com/512/921/921051.png'},
                {name: 'Elen', ava: 'https://cdn-icons-png.flaticon.com/512/921/921060.png'},
                {name: 'Petryk', ava: 'https://cdn-icons-png.flaticon.com/512/921/921021.png'},
                {name: 'Kok', ava: 'https://cdn-icons-png.flaticon.com/512/921/921055.png'},
            ]
        }
    },
    _callSubsckriber() {
        console.log('State is cheng');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubsckriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubsckriber(this._state);
    }
}

export default store;
