const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UpdateNewPost';


let initialState = {
    PostsArray: [
        {text: "Я дома!"},
    ],
    newPostText: "Hey Hey",

}

const HomePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                text: state.newPostText,
            }
            state.PostsArray.push(newPost);
            state.newPostText = '';

            return state;

        case UPDATE_NEW_POST:
            state.newPostText = action.newPostText;

            return state;

        default:
            return state;
    }

}

export const addPostActionCreater = () =>({type: ADD_POST})
export const onPostChangeActionCreater = (text) =>({type: UPDATE_NEW_POST, newPostText: text})


export default HomePageReducer;