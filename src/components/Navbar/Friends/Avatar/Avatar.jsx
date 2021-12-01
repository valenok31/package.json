import React from "react";
import s from './Avatar.module.css';
import {NavLink} from "react-router-dom";


const Avatar = (props) => {


    return (
        <div className={s.DivAvatarFriends}>{props.name}
            <div><img src={props.ava} className={s.avatarFriends}/></div>
        </div>
    )

}


export default Avatar;