import React from 'react';
import DialogsWith from "./DialogsWith";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        MessagesPage: state.MessagesPage,
    }
}

let mapDispatchToProps = () => {
    return{

    }
}

const DialogsWithContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWith)

export default DialogsWithContainer;