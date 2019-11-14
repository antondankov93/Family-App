import s from "../Login.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/valiators/validators";
import {Input} from "../../common/FormsControls/FormsControls";
import style from './../../common/FormsControls/FormsControls.module.css'

let LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div className={s.input}>
                    <Field  component={Input} name={'email'} placeholder={'Email'}/>
                </div>

                <div className={s.input}>
                    <Field  type={'password'} component={Input} name={'password'} placeholder={'Password'}/>
                </div>

                <div className={s.input}>
                    <Field component={Input} type={"checkbox"} name={'rememberMe'}/>remember me
                </div>

                {props.error && <div className={style.formSummaryError}>{props.error}</div>}

                <div className={s.input}>
                    <button>Login</button>
                </div>
            </form>
        </>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm;