import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    post: [
        {id: 1, message: 'Hi! How are you?', liceCount: 2},
        {id: 2, message: 'It`s my first post!', liceCount: 7},
        {id: 3, message: 'Yo-ho-ho', liceCount: 568},
        {id: 4, message: 'Gisha like', liceCount: 22},
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                post: [...state.post, {id: 5, message: action.addNewTextForm, liceCount: 25}],
                newPostText: '',
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (addNewTextForm) => ({type: ADD_POST,addNewTextForm});
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUsersRed = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data.data));
        })
    }

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {

        dispatch(setStatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}


export default profileReducer;