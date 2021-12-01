import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
    // console.log(statss);

    //state = state.profilePage;
    //let state = props.store.profilePage;


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        // props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
        //props.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     post={state.post}
                     newPostText={state.newPostText}/>)
}*/

const MapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        newPostText: state.profilePage.newPostText,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }

    }
}


const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);


export default MyPostsContainer;