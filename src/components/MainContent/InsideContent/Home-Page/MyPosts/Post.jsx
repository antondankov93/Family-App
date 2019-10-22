import React from 'react';
import style from "./Post.module.css";
import PostElement from "./PostElement/PostElement";
import {addPostActionCreater, onPostChangeActionCreater} from "../../../../../Redux/HomePageReducer";


let Post = (props) => {

    let state = props.store.getState().HomePage;
    let Posts = state.PostsArray.map(p => <PostElement message={p.text}/>)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
       //props.store.dispatch(addPostActionCreater());
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPost();
        // let action = onPostChangeActionCreater(text);
        // props.store.dispatch(action);
    }

    return (
        <div className={style.wrapper}>
            <div>{Posts}</div>
            <textarea onChange={onPostChange} value={props.store.getState().HomePage.newPostText} ref={newPostElement} ></textarea><br></br>
            <button onClick={addNewPost}>Отправить</button>
        </div>
    )

}

export default Post;