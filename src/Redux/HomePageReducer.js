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
           { let newPost = {
                text: state.newPostText,
            }
            let stateCopy = {...state,



            }
            stateCopy.PostsArray = [...state.PostsArray];
            stateCopy.PostsArray.push(newPost)
            stateCopy.newPostText = '';

            return stateCopy;}

        case UPDATE_NEW_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newPostText;

            return stateCopy;
}
        default:
            return state;
    }

}

export const addPostActionCreater = () =>({type: ADD_POST})
export const onPostChangeActionCreater = (text) =>({type: UPDATE_NEW_POST, newPostText: text})


export default HomePageReducer;