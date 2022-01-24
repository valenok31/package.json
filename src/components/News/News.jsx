import React from 'react';
import s from './News.module.css';
import ProfileContainer from "../Profile/ProfileContainer";
import Dialogs from "../Dialogs/Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const News = () => {
    return (
        <div className={s.impex}>
            Hi! Alisa. How are you?
        </div>
    )

}


export default compose(
    withAuthRedirect,

)(News);