import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postElement = props.post.map(p => <Post message={p.message} liceCount={p.liceCount}/>);


    let onAddPost = () => {
        props.addPost();
            }

    let onPostChange = (e) => {

        //let text = newPostElement.current.value;
        let text = e.target.value;
        props.updateNewPostText(text);
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        //let action = f_updateNewPostTextActionCreator(text);
        //props.dispatch(action);
    }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;