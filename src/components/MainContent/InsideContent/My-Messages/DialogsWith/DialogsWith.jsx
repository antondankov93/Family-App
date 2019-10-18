import React from 'react';
import styles from './DialogsWith.module.css'
import DialogItem from "./DialogItem/DialogItem";


const DialogsWith = (props) => {

    let store = props.store.getState();
    let DialogElement = store.MessagesPage.DialogPersons.map(d => <DialogItem name={d.name} id={d.id}/>
    );

    return (
        <div className={styles.Wrapper}>
            <div className={styles.wrapperMembers}>
                {DialogElement}
            </div>

        </div>
    )

}


export default DialogsWith;