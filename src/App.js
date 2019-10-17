import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import store from "./Redux/State";




const App = (props) => {

    return (
            <div className="wrapper">
                <Header LogoPicture={props.state.Icons.Logos}/>
                <MainContent dispatch={props.dispatch} AvatarLogo={props.state.Avatars} PostWindow={props.state.HomePage} MessagesProps={props.state.MessagesPage.MessageData} Persons={props.state.MessagesPage.DialogPersons}/>
            </div>
    );
}


export default App;
