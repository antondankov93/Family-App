import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../Redux/Auth-Reducer";
import {connect} from "react-redux";
import {loginAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        loginAPI.getAuthMe().then(data=> {
                if(data.resutCode === 0){
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login)
            }
        });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state)  => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);