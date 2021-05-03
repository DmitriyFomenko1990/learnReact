import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileData, getStatus, updateStatus} from "../../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";



class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.authorizedUserId;
            if (!userID){
                this.props.history.push('/login')
            }
        }

        this.props.getProfileData(userID)
        this.props.getStatus(userID)
    }

    render() {

        return <Profile { ...this.props} />


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
}
export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileData, getStatus, updateStatus}))(ProfileConteiner)
