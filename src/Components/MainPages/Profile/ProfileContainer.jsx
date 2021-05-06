import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileData, getStatus, updatePhoto, updateStatus} from "../../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    loadProfileData(){
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.authorizedUserId;
            if (!userID){
                this.props.history.push('/login')
            }
        }
        this.props.getProfileData(userID);
        this.props.getStatus(userID);
    }
        componentDidMount() {
        this.loadProfileData()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.loadProfileData()
        }
    }
    render() {
        return <Profile { ...this.props} isOwner={!this.props.match.params.userID} />
    }
}
const mapStateToProps = (state) => {
    return {
        postsObj: state.profilePage.posts,
        data: state.profilePage.dataPerson,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,

    }
};
export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileData, getStatus, updatePhoto, updateStatus}))(ProfileContainer)
