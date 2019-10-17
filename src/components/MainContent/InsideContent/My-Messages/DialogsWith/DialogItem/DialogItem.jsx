import React from "react";
import {NavLink} from "react-router-dom";
import styles from './DialogItem.module.css'


const DialogItem = (props) =>{
    let path = 'My-Messages/' + props.id;
    return(
        <div className={styles.members}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export default DialogItem;