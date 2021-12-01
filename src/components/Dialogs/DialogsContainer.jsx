import React from 'react';
import {f_addPostActionCreator, f_updateNewPostTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(f_updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(f_addPostActionCreator());
        },

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;