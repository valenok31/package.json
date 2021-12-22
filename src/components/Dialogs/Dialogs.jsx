import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements = props.messages.map(p => <Message message={p.message}/>);
    let dialogsPeople = props.dialogs.map(s => (<DialogItem name={s.name} id={s.id}/>));

    // let dialogsElements = props.post.messages.map(p => <Message message={p.message}/>);
    //let dialogsPeople = props.post.dialogs.map(s => (<DialogItem name={s.name} id={s.id}/>));
    //let newPostElement = React.createRef();

    let addPost = () => {
        props.f_addPostActionCreator();
        //props.store.dispatch(f_addPostActionCreator());
    }

    let onPostChange = (e) => {
        //let text = newPostElement.current.value;
        let text = e.target.value;
        props.f_updateNewPostTextActionCreator(text);

    }

    if(!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsPeople}
            </div>
            <div className={s.messages}>
                {dialogsElements}
            </div>
            <div className={s.textarea_button}>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>

    )

}

export default Dialogs;