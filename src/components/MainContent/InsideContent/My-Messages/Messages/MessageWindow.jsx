import React from 'react';
import styles from './MessageWindow.module.css';
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";

const MessageWindow = (props) => {

    let MessageElement = props.MessagesPage.MessageData.map(m => <MessageItem text={m.dataText}/>)


    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody);
    };

    return (
        <div className={styles.Wrapper}>
            {MessageElement}
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>

    )

}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'}
                       placeholder='Пишите сюда сообщение'/></div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'MessageForm'})(MessageForm)


export default MessageWindow;