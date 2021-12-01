import React from "react";
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";
import Post from "../../Profile/MyPosts/Post/Post";
import Avatar from "./Avatar/Avatar";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import state from "../../../redux/store";



const Friends = (props) => {
let ded = props.ded;
let avaM = ded.map(a => <Avatar ava={a.ava} name={a.name}/>)

    return (
        <nav className={s.blockFriends}>
            <div className={s.item}>
                Friends
            </div>
            <div className={s.nav}>

                {avaM}

            </div>
        </nav>
    )


}


export default Friends;