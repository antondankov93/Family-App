import React from 'react'
import {LoginReduxForm} from "./loginForm/LoginForm";
import {login} from "../../Redux/Auth-Reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth){
        return <Redirect to={'/Home-page}'}/>
    }

    return (
        <section>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </section>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginPage);