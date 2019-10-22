import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import store from "./Redux/Store";
=======
import store from "./Redux/redux-store";
>>>>>>> 5c365aab8dc55ce5702dca6fc8be0bf198526df3
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
        <App dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>, document.getElementById('root'));

}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


