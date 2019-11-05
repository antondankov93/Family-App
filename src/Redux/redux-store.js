import {combineReducers, createStore} from "redux";
import HomePageReducer from "./HomePageReducer";
import MessagePageReducer from "./MessagePageReducer";
import UsersPageReducer from "./UsersPageReducer";
import authReducer from "./Auth-Reducer";

let reducersBanch = combineReducers({
    HomePage: HomePageReducer,
    MessagesPage: MessagePageReducer,
    UsersPage: UsersPageReducer,
    Auth: authReducer,
})

let store = createStore(reducersBanch);

window.store = store;

export default store;

