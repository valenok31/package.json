import {auchAPI} from "../api/api";

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
                ...action.data,
                isAuth: true,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export const getUsersRed = () => (dispatch) => {
    auchAPI.getHeader().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        }
    )
}


export default authReducer;