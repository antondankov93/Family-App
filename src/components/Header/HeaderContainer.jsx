import React from 'react';
import Header from "./Header";
import {getAuthUserData} from "../../Redux/Auth-Reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);