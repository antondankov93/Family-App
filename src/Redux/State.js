import HomePageReducer from "./HomePageReducer";
import MessagePageReducer from "./MessagePageReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UpdateNewPost';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {
    _state: {
        HomePage: {
            PostsArray: [
                {text: "Я дома!"},
            ],
            newPostText: "Hey Hey Yo",

        },

        MessagesPage: {
            DialogPersons: [
                {id: 1, name: "Петя"},
                {id: 2, name: 'Катя'},
                {id: 3, name: "Вася"},
                {id: 4, name: "Оля"},
                {id: 5, name: "Джанибег"},
                {id: 6, name: "Пердыгуль"},],
            MessageData: [
                {id: 1, dataText: "Привки!"},
                {id: 2, dataText: "Как дела!"},
                {id: 3, dataText: "Превед медвед!"},
            ],
            newMessageBody: ""
        },


    },

    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('State is changed');
    },
    addPost(){
        let newPost = {
            text: this._state.HomePage.newPostText,
        }
        this._state.HomePage.PostsArray.push(newPost);
        this._state.HomePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPost(newText){
        this._state.HomePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        // if(action.type === ADD_POST){
        //     let newPost = {
        //         text: this._state.HomePage.newPostText,
        //     }
        //     this._state.HomePage.PostsArray.push(newPost);
        //     this._state.HomePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // }
        // else if(action.type === UPDATE_NEW_POST){
        //     this._state.HomePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // }
        this._state.HomePage = HomePageReducer(this._state.HomePage, action);
        this._state.MessagesPage = MessagePageReducer(this._state.MessagesPage, action);
        this._callSubscriber(this._state);
        // else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        //     this._state.MessagesPage.newMessageBody = action.body;
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === SEND_MESSAGE){
        //     let body = this._state.MessagesPage.newMessageBody;
        //     //this._state.MessagesPage.newMessageBody = '';
        //     this._state.MessagesPage.MessageData.push({id: 4, dataText: body});
        //
        // }
    }
}

export const addPostActionCreater = () =>({type: ADD_POST})
export const onPostChangeActionCreater = (text) =>({type: UPDATE_NEW_POST, newPostText: text})

export const sendMessageCreater = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreater = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default store;
window.store = store;