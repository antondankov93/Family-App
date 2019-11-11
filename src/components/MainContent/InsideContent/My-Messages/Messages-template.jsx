import React from 'react';
import styles from "./Messages-template.module.css"
import DialogsWithContainer from "./DialogsWith/DialogsWithContainer";
import MessageWindowContainer from "./Messages/MessageWindowConteiner";

const Messages = (props) => {
    return(
        <div className={styles.MessagesGrid}>
            <DialogsWithContainer store={props.store}/>
            <MessageWindowContainer store={props.store}/>
        </div>
    )
}

export default Messages;

