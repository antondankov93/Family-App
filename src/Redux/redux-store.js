import {combineReducers, createStore} from "redux";
import HomePageReducer from "./HomePageReducer";
import MessagePageReducer from "./MessagePageReducer";

let reducersBanch = combineReducers({
    HomePage: HomePageReducer,
    MessagesPage: MessagePageReducer
})

let store = createStore(reducersBanch);



export default store;