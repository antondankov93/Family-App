import React from 'react';
import styles from "./NavigationItems.module.css";
import {NavLink} from "react-router-dom";


const NavigationItems = () => {
    return (
        <nav className={styles.HeaderNav}>
            <div>
                <NavLink to="/MainContent/InsideContent/My-Profile/MyPosts" className={styles.item}
                         activeClassName={styles.activeLink}>Главная
                    страница</NavLink>
            </div>

            <div>
                <NavLink to="/MainContent/InsideContent/My-Messages"
                         activeClassName={styles.activeLink}
                         className={styles.item}>Мои сообщения</NavLink>
            </div>

            <div>
                <NavLink to="/MainContent/InsideContent/Events" activeClassName={styles.activeLink}
                         className={styles.item}>События</NavLink>
            </div>

            <div>
                <NavLink to="/MainContent/InsideContent/TODO-lists"
                         activeClassName={styles.activeLink} className={styles.item}>Списки
                    дел</NavLink>
            </div>


            <div>
                <NavLink to="/MainContent/InsideContent/Contacts" activeClassName={styles.activeLink}
                         className={styles.item}>Контакты</NavLink>
            </div>
        </nav>
    )


}

export default NavigationItems;