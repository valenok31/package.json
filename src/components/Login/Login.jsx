import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

const maxLength100 = maxLengthCreator(100);
const maxLength20 = maxLengthCreator(20);
const minLength3 = minLengthCreator(3);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"email"} name={"email"} component={Input}
                        validate={[required, maxLength100]}/></div>
            <div><Field placeholder={"password"} name={"password"} component={Input}
                        validate={[required, maxLength20, minLength3]} type={"password"}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/>remember me</div>

            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmitFormData = (formData) => {
        let {email, password, rememberMe} = formData;
        console.log(`email: ${email}`)
        console.log(`password: ${password}`)
        console.log(`rememberMe: ${rememberMe}`)
        console.log(formData)

        props.login(email, password, rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitFormData}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth

})
export default connect(mapStateToProps, {login})(Login);