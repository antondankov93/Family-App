import React from 'react';
import {connect} from "react-redux";
import {
<<<<<<< HEAD
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
} from "../../../../Redux/UsersPageReducer";
import * as axios from "axios/index";
import Users from "./Users";
import preloader from '../../../../assets/image/Ellipsis-1.7s-177px.svg'
=======
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleIsFetching,
} from "../../../../Redux/UsersPageReducer";
import * as axios from "axios/index";
import Users from "./Users";
import Preloader from "../../../common/preloader";

>>>>>>> 7ab811ff51d300d96f9c4ba68d21670408d3119d


class UsersContainer extends React.Component {


    componentDidMount() {
<<<<<<< HEAD
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
           this.props.toggleIsFetching(false);
=======
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
>>>>>>> 7ab811ff51d300d96f9c4ba68d21670408d3119d
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
<<<<<<< HEAD
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
=======
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
>>>>>>> 7ab811ff51d300d96f9c4ba68d21670408d3119d
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    render(){

        return (
            <>
<<<<<<< HEAD
                {this.props.isFetching ? <img src={preloader}/> : null}
=======
                {this.props.isFetching ? <Preloader /> : null }
>>>>>>> 7ab811ff51d300d96f9c4ba68d21670408d3119d
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
<<<<<<< HEAD
        isFetching: state.UsersPage.isFetching,
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
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

     setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },

      toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },



    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
;
=======
        isFetching: state.UsersPage.isFetching
    }
 }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//
//      setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//
//
//     }
// }





export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
>>>>>>> 7ab811ff51d300d96f9c4ba68d21670408d3119d
