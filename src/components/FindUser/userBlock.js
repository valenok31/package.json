import React from "react";
import s from './UserBlock.module.css';


const UserBlock = (props) => {


    return(
        <div className={s.box}>
            <div className={s.userClass}><img src={props.ava} /> {props.name} , {props.age} , {props.city}  </div>
        </div>
    )
}

export default UserBlock;