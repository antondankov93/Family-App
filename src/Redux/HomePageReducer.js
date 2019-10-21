const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UpdateNewPost';

const HomePageReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: state.newPostText,
            }
            state.PostsArray.push(newPost);
            state.newPostText = '';


        case UPDATE_NEW_POST:
            state.newPostText = action.newText;

        default:
            return state;
    }

}


export const addPostActionCreater = () =>({type: ADD_POST})
export const onPostChangeActionCreater = (text) =>({type: UPDATE_NEW_POST, newPostText: text})


export default HomePageReducer;