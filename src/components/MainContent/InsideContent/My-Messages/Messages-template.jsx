import React from 'react';
import styles from "./Messages-template.module.css"
import DialogsWith from "./DialogsWith/DialogsWith";
import MessageWindow from "./Messages/MessageWindow";

const Messages = (props) => {
    return(
        <div className={styles.MessagesGrid}>
            <DialogsWith AvatarLogo={props.AvatarLogo} Persons={props.Persons}/>
            <MessageWindow MessagesProps={props.MessagesProps}/>
        </div>
    )
}

export default Messages;