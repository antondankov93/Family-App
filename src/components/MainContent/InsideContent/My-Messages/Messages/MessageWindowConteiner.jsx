import React from 'react';
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../../../../Redux/MessagePageReducer";
import MessageWindow from "./MessageWindow";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{
    return{
        MessagesPage: state.MessagesPage
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        onSendMessageClick: () => {dispatch(sendMessageCreater())},

        onNewMessageChange: (body) => {dispatch(updateNewMessageBodyCreater(body))}

    }
}

const MessageWindowContainer = connect(mapStateToProps, mapDispatchToProps)(MessageWindow);

export default MessageWindowContainer;