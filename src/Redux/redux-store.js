import {applyMiddleware, combineReducers, createStore} from "redux";
import HomePageReducer from "./HomePageReducer";
import MessagePageReducer from "./MessagePageReducer";
import UsersPageReducer from "./UsersPageReducer";
import authReducer from "./Auth-Reducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'


let reducersBanch = combineReducers({
    HomePage: HomePageReducer,
    MessagesPage: MessagePageReducer,
    UsersPage: UsersPageReducer,
    Auth: authReducer,
    form: formReducer,
})

let store = createStore(reducersBanch, applyMiddleware(thunk));

window.store = store;

export default store;

