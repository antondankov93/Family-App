const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UpdateNewPost';

const HomePageReducer = (state, action) => {


    if (action.type === ADD_POST) {
        let newPost = {
            text: state.newPostText,
        }
        state.PostsArray.push(newPost);
        state.newPostText = '';
    }

    else if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.newText;
    }

return state;
}

export default HomePageReducer;