const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    post: [
        {id: 1, message: 'Hi! How are you?', liceCount: 2},
        {id: 2, message: 'It`s my first post!', liceCount: 7},
        {id: 3, message: 'Yo-ho-ho', liceCount: 568},
        {id: 4, message: 'Gisha like', liceCount: 22},
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                post: [...state.post, {id: 5, message: state.newPostText, liceCount: 0}],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;