import React from 'react';
import {f_addPostActionCreator, f_updateNewPostTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


/*const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let addPost = () => {
        //props.addPost();
        props.store.dispatch(f_addPostActionCreator());
    }

    let onPostChange = (text) => {

        let action = f_updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (<Dialogs updateNewPostText={onPostChange}
                     addPost={addPost}
                     newPostText={state.newPostText}
                     messages={state.messages}
                     dialogs={state.dialogs}/>
    )

}*/



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newPostText: state.dialogsPage.newPostText,
        isAuth: state.auth.isAuth,
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(f_updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(f_addPostActionCreator());
        },

    }
}*/
let AuthRedirectComponent = (props) => {
    if(!props.isAuth) return <Redirect to='/login'/>;
    return <Dialogs {...props}/>
}

const DialogsContainer = connect(mapStateToProps,
    {f_updateNewPostTextActionCreator, f_addPostActionCreator})(AuthRedirectComponent);

export default DialogsContainer;