import React from 'react';
import styles from './DialogsWith.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {NavLink} from "react-router-dom";


const DialogsWith = (props) => {

    let DialogElement = props.MessagesPage.DialogPersons.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={styles.Wrapper}>
            <div className={styles.wrapperMembers}>
                <NavLink to="/MainContent/InsideContent/UsersList"  className={styles.navlink}>Показать пользователей</NavLink>
                {DialogElement}
            </div>

        </div>
    )

}


export default DialogsWith;