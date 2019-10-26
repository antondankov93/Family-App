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

        case ADD_POST: {
            let newPost = {
                text: state.newPostText,
            }
            return {
                ...state,
                PostsArray: [...state.PostsArray, (newPost)],
                newPostText: '',
            }
        }

        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newPostText,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreater = () =>({type: ADD_POST})
export const onPostChangeActionCreater = (text) =>({type: UPDATE_NEW_POST, newPostText: text})


export default HomePageReducer;