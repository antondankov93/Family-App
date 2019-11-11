import s from "../Login.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";


let LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div className={s.input}>
                    <Field component={'input'} name={'login'} placeholder={'login'}/>
                </div>
                <div className={s.input}>
                    <Field component={'input'} name={'password'} placeholder={'password'}/>
                </div>
                <div className={s.input}>
                    <Field component={'input'} type={"checkbox"} name={'rememberMe'}/>remember me
                </div>
                <div className={s.input}>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm;