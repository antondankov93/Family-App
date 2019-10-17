import React from 'react';
import styles from './MessageWindow.module.css';
import MessageItem from "./MessageItem/MessageItem";


const MessageWindow = (props) => {
    let MessageElement = props.MessagesProps.map(m => <MessageItem text={m.dataText}/>)

    return(
        <div className={styles.Wrapper}>
            {MessageElement}

        </div>
    )

}

export default MessageWindow;