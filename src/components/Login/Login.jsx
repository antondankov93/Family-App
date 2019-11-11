import React from 'react'
import {LoginReduxForm} from "./loginForm/LoginForm";


const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <section>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </section>
    )
}




export default LoginPage;