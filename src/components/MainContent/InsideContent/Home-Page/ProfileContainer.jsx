import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, profileThunk, setUserProfile, updateStatusThunk} from "../../../../Redux/HomePageReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5000
        }
        this.props.profileThunk(userId);
        setTimeout(() => {
            this.props.getStatusThunk(userId)
        }, 1000)

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatusThunk={this.props.updateStatusThunk}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.HomePage.profile,
    status: state.HomePage.status,
})

export default compose(
    connect(mapStateToProps, {setUserProfile, profileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
