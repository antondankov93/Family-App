import React from 'react';
import styles from "./InsideContent.module.css";
import Messages from "./My-Messages/Messages-template";
import Contacts from "./Contacts/contacts-template";
import Events from "./Events/events-template";
import TodoList from "./TODO-lists/todo-list-template";
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Home-Page/ProfileContainer";


const InsideContent = () => {

    return (
            <div className={styles.insideContent}>
                <Route path='/MainContent/InsideContent/Events' render={ () => <Events />} />
                <Route path='/MainContent/InsideContent/Contacts' render={ () => <Contacts />} />
                <Route path='/MainContent/InsideContent/TODO-lists' render={ () => <TodoList />} />
                <Route path='/MainContent/InsideContent/My-Messages' render={ () => <Messages />} />
                <Route path='/MainContent/InsideContent/My-Profile' render={ () => <ProfileContainer />} />
                <Route path='/MainContent/InsideContent/UsersList' render={ () => <UsersContainer />} />
            </div>
    );
}


export default InsideContent;