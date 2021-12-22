import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {



    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}


export default Profile;