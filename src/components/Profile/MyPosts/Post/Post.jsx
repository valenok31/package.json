import React from "react";
import s from './Post.module.css';



const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://pixy.org/src/476/4765415.png'/>
            {props.message}
            <div>
                {props.liceCount}
            </div>
        </div>
    )
}

export default Post;