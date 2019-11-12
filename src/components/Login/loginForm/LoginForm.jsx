import s from "../Login.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/valiators/validators";
import {Input} from "../../common/FormsControls/FormsControls";

let LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div className={s.input}>
                    <Field validate={[requiredField]} component={Input} name={'email'} placeholder={'email'}/>
                </div>
                <div className={s.input}>
                    <Field validate={[requiredField]} type={'password'} component={Input} name={'password'} placeholder={'password'}/>
                </div>
                <div className={s.input}>
                    <Field component={Input} type={"checkbox"} name={'rememberMe'}/>remember me
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