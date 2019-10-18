import React from 'react';
import styles from "./Messages-template.module.css"
import DialogsWith from "./DialogsWith/DialogsWith";
import MessageWindow from "./Messages/MessageWindow";

const Messages = (props) => {
    return(
        <div className={styles.MessagesGrid}>
            <DialogsWith store={props.store}/>
            <MessageWindow dispatch={props.dispatch} store={props.store}/>
        </div>
    )
}

export default Messages;

