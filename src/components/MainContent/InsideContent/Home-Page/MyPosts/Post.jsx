import React from 'react';
import style from "./Post.module.css";
import PostElement from "./PostElement/PostElement";
import {addPostActionCreater, onPostChangeActionCreater} from "../../../../../Redux/State";


let Post = (props) => {

    let Posts = props.PostWindow.PostsArray.map(p => <PostElement message={p.text}/>)

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action =onPostChangeActionCreater(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div>{Posts}</div>
            <textarea onChange={onPostChange} value={props.PostWindow.newPostText} ref={newPostElement} cols="30" rows="6"></textarea><br></br>
            <button onClick={addNewPost}>Отправить</button>
        </div>
    )

}

export default Post;