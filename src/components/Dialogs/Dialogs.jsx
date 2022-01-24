import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let dialogsElements = props.messages.map(p => <Message message={p.message}/>);
    let dialogsPeople = props.dialogs.map(s => (<DialogItem name={s.name} id={s.id}/>));

    // let dialogsElements = props.post.messages.map(p => <Message message={p.message}/>);
    //let dialogsPeople = props.post.dialogs.map(s => (<DialogItem name={s.name} id={s.id}/>));
    //let newPostElement = React.createRef();

    let addPost = (values) => {
        props.f_addPostActionCreator(values.dialogTextAreaForm);
        //props.store.dispatch(f_addPostActionCreator());
    }


    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsPeople}
            </div>
            <div className={s.messages}>
                {dialogsElements}
            </div>
            <DialogsReduxForm onSubmit={addPost}/>
        </div>

    )

}

const maxLength20 = maxLengthCreator(20);

const DialogsForm = (props) => {
    return (<form  onSubmit={props.handleSubmit}>
            <div className={s.textarea_button}>
                <Field placeholder={"Text only 300 tok"} component={Textarea} name={"dialogTextAreaForm"}
                       validate={[required, maxLength20]}/>
                {/*<textarea onChange={onPostChange} value={props.newPostText}/>*/}
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'DialogsTextArea'})(DialogsForm);

export default Dialogs;