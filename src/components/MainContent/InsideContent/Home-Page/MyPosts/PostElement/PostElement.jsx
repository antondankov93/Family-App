 import React from 'react';
import styles from './PostElement.module.css';
import style from "../Post.module.css";


const PostElement = (props) =>{
    return(
        <section className={style.onePost}>
            <img src="https://image.flaticon.com/icons/png/512/53/53176.png" alt=""/>
            <p>{props.message}</p>
            <button className={style.likeButton}>Like</button>
        </section>
    )
}

export default PostElement;