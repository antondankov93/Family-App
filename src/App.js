import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import store from "./Redux/Store";




const App = (props) => {

    return (
            <div className="wrapper">
                <Header/>
                <MainContent dispatch={props.dispatch} store={props.store}/>
            </div>
    );
}


export default App;
