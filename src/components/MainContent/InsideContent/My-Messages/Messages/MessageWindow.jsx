import React from 'react';
import styles from './MessageWindow.module.css';
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../../../../Redux/State";


const MessageWindow = (props) => {

    let state = props.store.getState().MessagesPage;
    let MessageElement = state.MessageData.map(m => <MessageItem text={m.dataText}/>)
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
       props.store.dispatch(sendMessageCreater())
    };
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreater(body))
    };

    return (
        <div className={styles.Wrapper}>
            {MessageElement}
            <div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Пишите сюда сообщение'></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>
        </div>

    )

}

export default MessageWindow;