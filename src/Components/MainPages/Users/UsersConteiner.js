import React from "react";
import {connect} from "react-redux";

import {
    followActivCreate, isReceivedActivCreate,
    setTotalUsersActivCreate,
    setUsersActivCreate,
    unfollowActivCreate,
    updatePageActivCreate
} from "../../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";


class UsersConteiner extends React.Component {

    componentDidMount() {
        this.props.isReceived(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageNumber}&count=${this.props.usersPageCount}`).then(response => {

            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
            this.props.isReceived(false)
        })
    }

    changePage = (page) => {
        this.props.isReceived(true)
        this.props.updatePage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageNumber}&count=${this.props.usersPageCount}`).then(response => {
            let x = this.props.isReceivedStatus
            
            this.props.setUsers(response.data.items)
            this.props.isReceived(false)
        })
    }

    render() {
        return <Users totalUsers={this.props.totalUsers}
                      usersPageCount={this.props.usersPageCount}
                      usersPageNumber={this.props.usersPageNumber}
                      users={this.props.users}
                      changePage={this.changePage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isReceivedStatus={this.props.isReceivedStatus}
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
}


const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActivCreate(id))
        },
        unfollow: (id) => {
            dispatch(unfollowActivCreate(id))
        },
        setUsers: (usersArr) => {
            dispatch(setUsersActivCreate(usersArr))
        },
        setTotalUsers: (totalCount) => {
            dispatch(setTotalUsersActivCreate(totalCount))
        },
        updatePage: (totalCount) => {
            dispatch(updatePageActivCreate(totalCount))
        },
        isReceived: (isReceived) => {
            dispatch(isReceivedActivCreate(isReceived))
        },


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersConteiner)