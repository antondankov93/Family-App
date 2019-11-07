import React from 'react';
import styles from "./InsideContent.module.css";
import Messages from "./My-Messages/Messages-template";
import Contacts from "./Contacts/contacts-template";
import Events from "./Events/events-template";
import TodoList from "./TODO-lists/todo-list-template";
import {Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Home-Page/ProfileContainer";
import LoginPage from "../../Login/login";


const InsideContent = () => {

    return (
            <div className={styles.insideContent}>
                <Route path='/Events' render={ () => <Events />} />
                <Route path='/Contacts' render={ () => <Contacts />} />
                <Route path='/TODO-lists' render={ () => <TodoList />} />
                <Route path='/My-Messages' render={ () => <Messages />} />
                <Route path='/Home-page/:userId?' render={ () => <ProfileContainer />} />
                <Route path='/UsersList' render={ () => <UsersContainer />} />
                <Route path='/Login' render={ () => <LoginPage />} />

            </div>
    );
}


export default InsideContent;