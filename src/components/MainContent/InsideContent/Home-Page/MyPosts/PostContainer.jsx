import React from 'react';
import style from "./Post.module.css";
import PostElement from "./PostElement/PostElement";
import {addPostActionCreater, onPostChangeActionCreater} from "../../../../../Redux/HomePageReducer";
import Post from "./Post";


let PostContainer = (props) => {

    let state = props.store.getState().HomePage;
    let Posts = state.PostsArray.map(p => <PostElement message={p.text}/>)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        //props.addPost()
        props.store.dispatch(addPostActionCreater());
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        //props. updateNewPost(text)

    }

    return (
      <Post updateNewPost={()=>{let action = onPostChangeActionCreater(text);
          props.store.dispatch(action);}}/>
    )

}

export default Post;