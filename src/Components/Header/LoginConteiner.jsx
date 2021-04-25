import React from "react";
import Login from "./Login"
import axios from "axios";
import {connect} from "react-redux";
import {setAuthInfo, setData} from "../../Redux/auth-reducer";

class LoginConteiner extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthInfo(id, login, email);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.id)
                        .then(response => {

                            this.props.setData(response.data.data)
                        })
                }
            });

    }

    render() {

        return <Login havePersonData={this.props.havePersonData}
                      userData={this.props.userData}/>
    }

}

let mapStateToProps = (state) => {
    return {
        havePersonData: state.auth.havePersonData,
        isAuth: state.auth.isAuth,
        userData: state.auth.dataPerson,
    }
}


export default connect(mapStateToProps, {setAuthInfo, setData})(LoginConteiner)