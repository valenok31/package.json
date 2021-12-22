import React from 'react';
import s from './News.module.css';

const News = (props) => {
    return (
        <div className={s.impex}>
            Hi! Alisa. How are you?
            {props.frt}
        </div>
    )

}

export default News;