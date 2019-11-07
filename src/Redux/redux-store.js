import {applyMiddleware, combineReducers, createStore} from "redux";
import HomePageReducer from "./HomePageReducer";
import MessagePageReducer from "./MessagePageReducer";
import UsersPageReducer from "./UsersPageReducer";
import authReducer from "./Auth-Reducer";
import thunk from 'redux-thunk';


let reducersBanch = combineReducers({
    HomePage: HomePageReducer,
    MessagesPage: MessagePageReducer,
    UsersPage: UsersPageReducer,
    Auth: authReducer,
})

let store = createStore(reducersBanch, applyMiddleware(thunk));

window.store = store;

export default store;

