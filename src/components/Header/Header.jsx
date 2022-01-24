import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    let rett = (<div>{props.login} - <button onClick={props.logout}>Log out</button></div>);
    let pott = (<NavLink to={'/login'}>login</NavLink>);
    return (
        <header className={s.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? rett : pott}



            </div>
        </header>

    )


}


export default Header;