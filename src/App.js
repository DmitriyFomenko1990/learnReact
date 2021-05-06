import React from "react";
import  "./App.css";
import Header from './Components/Header/Header';
import Messages from "./Components/MainPages/Messages/Messages";
import {Route, withRouter} from "react-router-dom";
import Settings from "./Components/MainPages/Settings/Settings";
import Tools from "./Components/MainPages/Tools/Tools";
import ProfileContainer from "./Components/MainPages/Profile/ProfileContainer";
import UsersContainer from "./Components/MainPages/Users/UsersContainer";
import LoginPage from "./Components/MainPages/LoginPage/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Tools/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="wrapper">
                <Header className="header"/>
                <div className="content">
                    <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                    <Route path='/messages' render={() => <Messages/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/tools' render={() => <Tools/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
                <div className="footer">Footer</div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
