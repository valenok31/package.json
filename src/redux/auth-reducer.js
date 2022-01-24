import {auchAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'UNFOLLOW';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {id, email, login, isAuth}
});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export const getUsersRed = () => (dispatch) => {
    return auchAPI.getHeader()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            }
        )
}
export const login = (email, password, rememberMe) => (dispatch) => {
    auchAPI.login(email, password, rememberMe).then(data => {
            if (data.data.resultCode === 0) {
                dispatch(getUsersRed());
            } else {
                let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
                dispatch(stopSubmit("Login", {email: message}))
            }
        }
    )
}

export const logout = () => (dispatch) => {
    auchAPI.logout().then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }
    )
}

export default authReducer;