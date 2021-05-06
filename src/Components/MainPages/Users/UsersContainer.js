import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setTotalUsers,
    unfollow,
    updatePage
} from "../../../Redux/users-reducer";
import Users from "./Users";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getNumberUsersPerPage,
    getReceivedStatus,
    getTotalUsers,
    getUsers,
    getUsersPageNumber
} from "../../../Redux/users-selections";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.usersPageNumber, this.props.numberUsersPerPage)
    };
    changePage = (page) => {
        this.props.updatePage(page)
        this.props.getUsers(this.props.usersPageNumber, this.props.numberUsersPerPage)
    };
    render() {
        return <Users totalUsers={this.props.totalUsers}
                      numberUsersPerPage={this.props.numberUsersPerPage}
                      usersPageNumber={this.props.usersPageNumber}
                      users={this.props.users}
                      changePage={this.changePage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isReceivedStatus={this.props.isReceivedStatus}
                      isAuth={this.props.isAuth}
        />
    }
}
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        numberUsersPerPage: getNumberUsersPerPage(state),
        usersPageNumber: getUsersPageNumber(state),
        totalUsers: getTotalUsers(state),
        isReceivedStatus: getReceivedStatus(state),
    }
};
export default compose(
    connect(mapStateToProps,{follow, unfollow, setTotalUsers, updatePage, getUsers: requestUsers}),
    withAuthRedirect)(UsersContainer);