import React from 'react';
import {addPostActionCreater, onPostChangeActionCreater} from "../../../../../Redux/HomePageReducer";
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
        addNewPost: () => {dispatch(addPostActionCreater())},
        onPostChange: (text) => {dispatch(onPostChangeActionCreater(text))}
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;