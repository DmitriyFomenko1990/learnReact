import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setTotalUsers,
    unfollow,
    updatePage
} from "../../../Redux/users-reducer";
import Users from "./Users";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";



class UsersConteiner extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.usersPageNumber, this.props.usersPageCount)
    };
    changePage = (page) => {
        this.props.updatePage(page)
        this.props.getUsers(this.props.usersPageNumber, this.props.usersPageCount)
    };
    render() {
        return <Users totalUsers={this.props.totalUsers}
                      usersPageCount={this.props.usersPageCount}
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
        users: state.usersPage.users,
        usersPageCount: state.usersPage.usersPageCount,
        usersPageNumber: state.usersPage.usersPageNumber,
        totalUsers: state.usersPage.totalUsers,
        isReceivedStatus: state.usersPage.isReceivedStatus,
    }
};
export default compose(
    connect(mapStateToProps,{follow, unfollow, setTotalUsers, updatePage, getUsers} ),
    withAuthRedirect)(UsersConteiner);