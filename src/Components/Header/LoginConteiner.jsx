import React from "react";
import Login from "./Login"
import {connect} from "react-redux";
import {getUsersLogin, setAuthInfo, setData} from "../../Redux/auth-reducer";


class LoginConteiner extends React.Component {

    componentDidMount() {

        this.props.getUsersLogin()
    }

    render() {

        return <Login  userData={this.props.userData}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.auth,
    }
}


export default connect(mapStateToProps, {setAuthInfo, getUsersLogin})(LoginConteiner)