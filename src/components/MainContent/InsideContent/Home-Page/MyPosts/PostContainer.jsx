import React from 'react';
import {addPostActionCreater, onPostChangeActionCreater} from "../../../../../Redux/HomePageReducer";
import Post from "./Post";


let PostContainer = (props) => {

    let state = props.store.getState();

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    let onPostChange = (text) =>{
        let action = onPostChangeActionCreater(text);
        props.store.dispatch(action);
    }

    return (
      <Post updateNewPost={onPostChange} addPost={addNewPost} posts={state.HomePage} newPostText={state.HomePage.newPostText}/>
    )

}

export default PostContainer;