import HomePageReducer from "./HomePageReducer";
import MessagePageReducer from "./MessagePageReducer";


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

        this._state.HomePage = HomePageReducer(this._state.HomePage, action);
        this._state.MessagesPage = MessagePageReducer(this._state.MessagesPage, action);

        this._callSubscriber(this._state);

    }
}


export default store;
window.store = store;