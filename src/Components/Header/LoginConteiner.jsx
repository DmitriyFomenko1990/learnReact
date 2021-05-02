import React from "react";
import Login from "./Login"
import {connect} from "react-redux";
import {getUserData, logoutThunk} from "../../Redux/auth-reducer";


class LoginConteiner extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    };

    render() {
        return <Login  userData={this.props.userData} onLogout={this.props.logoutThunk}/>
    };
};

let mapStateToProps = (state) => {
    return {
        userData: state.auth,
    };
};


export default connect(mapStateToProps, {getUserData, logoutThunk})(LoginConteiner);