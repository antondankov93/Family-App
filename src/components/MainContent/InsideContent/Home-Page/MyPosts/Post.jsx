import React from 'react';
import style from "./Post.module.css";
import PostElement from "./PostElement/PostElement";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../../utils/valiators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

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
            <Field validate={[requiredField, maxLength10]} component={Textarea} name='PostFormText' placeholder='напишите пост'/><br/>
            <button>Отправить</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'PostForm'})(PostForm)

export default Post;