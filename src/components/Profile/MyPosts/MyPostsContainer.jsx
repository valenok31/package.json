import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        addPost: (addNewTextForm) => {
            dispatch(addPostActionCreator(addNewTextForm));
        },
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;