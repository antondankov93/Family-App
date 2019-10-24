import React from 'react';
import styles from './MessageWindow.module.css';
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../../../../Redux/MessagePageReducer";

const MessageWindow = (props) => {

    let MessageElement = props.MessagesPage.MessageData.map(m => <MessageItem text={m.dataText}/>)
    let newMessageBody = props.MessagesPage.newMessageBody;


    let onSendMessageClick = () => {
       props.onSendMessageClick();

    };
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.onNewMessageChange(body);
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