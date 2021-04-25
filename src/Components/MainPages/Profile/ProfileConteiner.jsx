import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setData} from "../../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileConteiner extends React.Component {
    componentDidMount() {

        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {

                    this.props.setData(response.data)
                }
            )
    }

    render() {
        return <Profile { ...this.props} />


    }
}

const mapStateToProps = (state) => {
    return {
        postsObj: state.profilePage.PostsObj,
        data: state.profilePage.dataPerson
    }
}

let witnDataConteinerComponent = withRouter(ProfileConteiner);
export default connect(mapStateToProps, {setData})(witnDataConteinerComponent);

