import React from 'react';
import styles from "./FooterMenu.module.css"
import {NavLink} from "react-router-dom";


const FooterMenu = () => {
    return (
        <div className={styles.footerGrid}>
            <div className={styles.itemsMenu}>
                <div className={styles.item}><NavLink to='#'><img
                    src="https://img.icons8.com/color/96/000000/idea.png"></img></NavLink></div>

                <div className={styles.item}><NavLink to='#'><img
                    src="https://img.icons8.com/color/96/000000/partly-cloudy-day.png"></img></NavLink></div>

                <div className={styles.item}><NavLink to='#'><img
                    src="https://img.icons8.com/color/96/000000/waypoint-map.png"></img></NavLink></div>

                <div className={styles.item}><NavLink to='#'><img
                    src="https://img.icons8.com/color/96/000000/musical-notes.png"></img></NavLink></div>

                <div className={styles.item}><NavLink to='#'><img
                    src="https://img.icons8.com/color/96/000000/instagram-new.png"></img></NavLink></div>
            </div>
        </div>
    )
}

export default FooterMenu;