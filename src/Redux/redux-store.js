import {combineReducers, createStore} from "redux";
import HomePageReducer from "./HomePageReducer";
import MessagePageReducer from "./MessagePageReducer";
import UsersPageReducer from "./UsersPageReducer";

let reducersBanch = combineReducers({
    HomePage: HomePageReducer,
    MessagesPage: MessagePageReducer,
    UsersPage: UsersPageReducer,
})

let store = createStore(reducersBanch);

window.store = store;

export default store;

