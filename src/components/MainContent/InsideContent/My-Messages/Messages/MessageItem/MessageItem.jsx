import React from 'react';
import styles from './MessageItem.module.css';

const MessageItem = (props) => {
    return(
        <div className={styles.MessageItem}>{props.text}</div>
    )
}

export default MessageItem;