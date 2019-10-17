

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
            ]
        },

        Icons: {
            Logos: [
                {
                    id: 1,
                    Adress: 'data:image/jpeg;base64,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'
                },
                {id: 2, Adress: 'SYKABLYA'}
            ]
        },


    },
    getState(){
        return this._state;
    },
    rerenderEntireTree(){
        console.log('State is changed');
    },
    addPost(){
        let newPost = {
            text: this._state.HomePage.newPostText,
        }
        this._state.HomePage.PostsArray.push(newPost);
        this._state.HomePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewPost(newText){
        this._state.HomePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },

    dispatch(action){
        if(action.type === "ADD-POST"){
            let newPost = {
                text: this._state.HomePage.newPostText,
            }
            this._state.HomePage.PostsArray.push(newPost);
            this._state.HomePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        }
        else if(action.type === "UpdateNewPost"){
            this._state.HomePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        }
    }
}

export const addPostActionCreater = () =>{
    return {
        type: 'ADD-POST',
    }
}
export const onPostChangeActionCreater = (text) =>{
    return {
        type: 'UpdateNewPost',
        newPostText: text,

    }
}



export default store;
window.store = store;