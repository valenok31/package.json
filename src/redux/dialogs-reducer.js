const F_ADD_POST = 'F-ADD-POST';

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-kama'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Gisha like'},
        {id: 5, message: 'A-tumba-you-you!!!'}
    ],
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
                messages: [...state.messages, {id: 6, message: action.dialogTextAreaForm},]
            };
        }
        default:
            return state;
    }
}
export const f_addPostActionCreator = (dialogTextAreaForm) => ({type: F_ADD_POST,dialogTextAreaForm});


export default dialogsReducer;