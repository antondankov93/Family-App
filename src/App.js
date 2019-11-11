import React from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {

    return (
            <div className="wrapper">
                <HeaderContainer/>
                <MainContent/>
            </div>
    );
}


export default App;
