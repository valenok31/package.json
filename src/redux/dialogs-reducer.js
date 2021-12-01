const F_ADD_POST = 'F-ADD-POST';
const F_UPDATE_NEW_POST_TEXT = 'F-UPDATE-NEW-POST-TEXT';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case F_ADD_POST: {
            return {
                ...state,
                newPostText: '',
                messages: [...state.messages, {id: 6, message: state.newPostText},]
            };
        }
        case F_UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };

        }
        default:
            return state;
    }
}
export const f_addPostActionCreator = () => ({type: F_ADD_POST});

export const f_updateNewPostTextActionCreator = (text) => ({
    type: F_UPDATE_NEW_POST_TEXT, newText: text
})
export default dialogsReducer;