import React from 'react';
import styles from './MessageWindow.module.css';
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../../../utils/valiators/validators";

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

const maxLength10 = maxLengthCreator(10);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField, maxLength10]} component={Textarea} name={'newMessageBody'}
                       placeholder='Пишите сюда сообщение'/></div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'MessageForm'})(MessageForm)


export default MessageWindow;