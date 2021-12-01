import React from 'react';
import s from './Message.module.css';


const Message = (props) => {
    //let time_log = new Date();
    return <div className={s.message}>{props.message}</div>

}


export default Message;