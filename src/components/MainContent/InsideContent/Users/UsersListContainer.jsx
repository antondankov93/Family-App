import React from 'react';
import UsersList from './UsersList'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../../Redux/UsersPageReducer";
import UsersListCLS from "./UsersList(class_component)";



let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }
 }

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersListCLS);

export default UsersListContainer;