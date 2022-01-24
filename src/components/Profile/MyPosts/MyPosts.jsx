import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Text only 300 tok"} name={"textAreaForm"} component={Textarea}
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const MyPostsReduxForm = reduxForm({form: 'TextArea'})(MyPostsForm)

const MyPosts = React.memo((props) => {
console.log("Yoo")
    let postElement = props.post.map(p => <Post message={p.message} liceCount={p.liceCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.textAreaForm);
    }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <MyPostsReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
});

export default MyPosts;