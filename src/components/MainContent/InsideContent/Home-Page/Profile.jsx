import React from 'react';
import PostContainer from './MyPosts/PostContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'


let Profile = (props) => {

    return (
        <section className={s.wrapper}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            <div className={s.borderLine}></div>
            <PostContainer/>
        </section>
    )
}

export default Profile;
