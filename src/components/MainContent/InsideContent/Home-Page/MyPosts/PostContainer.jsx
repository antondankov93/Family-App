import React from 'react';
import {addNewPost, onPostChange} from "../../../../../Redux/HomePageReducer";
import Post from "./Post";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        HomePage: state.HomePage,
        newPostText: state.HomePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost,
        onPostChange
    }
}

const PostContainer = connect(mapStateToProps, {addNewPost,onPostChange})(Post);

export default PostContainer;