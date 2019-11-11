import React from 'react';
import style from "./Post.module.css";
import PostElement from "./PostElement/PostElement";
import {Field, reduxForm} from "redux-form";


let Post = (props) => {

    let Posts = props.HomePage.PostsArray.map(p => <PostElement message={p.text}/>)

    let addNewPost = (values) =>{
        props.addNewPost(values.PostFormText);
    }

    return (
        <div className={style.wrapper}>
            <div>{Posts}</div>
            <PostReduxForm onSubmit={addNewPost}/>
        </div>
    )

}

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='PostFormText' placeholder='напишите пост'/><br/>
            <button>Отправить</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'PostForm'})(PostForm)

export default Post;