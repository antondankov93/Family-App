import React from 'react';
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../../../../Redux/MessagePageReducer";
import MessageWindow from "./MessageWindow";

const MessageWindowContainer = () => {
    return <StoreContext.Consumer>{
        store => {


            let state = store.getState().MessagesPage;


            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreater())

            };
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreater(body))
            };

            return (
                <div>
                    <MessageWindow state={state} updateNewMessageBody={onNewMessageChange}
                                   sendMessage={onSendMessageClick}/>
                </div>
            )
        }
    }
    </StoreContext.Consumer>
}

let f1 =()=>{
    return{

    }
}
let f2 =()=>{
    return{

    }
}

const SuperMessageWindowContainer = connect(f1, f2)(MessageWindow);

export default MessageWindowContainer;