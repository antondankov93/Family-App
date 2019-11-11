import React from 'react';
import {addNewPost} from "../../../../../Redux/HomePageReducer";
import Post from "./Post";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        HomePage: state.HomePage,
        newPostText: state.HomePage.newPostText,
    }
}

const PostContainer = connect(mapStateToProps, {addNewPost})(Post);

export default PostContainer;