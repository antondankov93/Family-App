import React from 'react';
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../../../../Redux/MessagePageReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../../HOC/withAuthRedirect";
import MessageWindow from "./MessageWindow";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    MessagesPage: state.MessagesPage,
})

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageCreater(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessageWindow);