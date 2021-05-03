import React from "react";
import "./App.css";
import Header from './Components/Header/Header';
import Messages from "./Components/MainPages/Messages/Messages";
import {Route, withRouter} from "react-router-dom";
import Settings from "./Components/MainPages/Settings/Settings";
import News from "./Components/MainPages/News/News";
import ProfileConteiner from "./Components/MainPages/Profile/ProfileConteiner";
import UsersConteiner from "./Components/MainPages/Users/UsersConteiner";
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
        if (!this.props.initialize) {
            <Preloader />
        }
        return (
            <div>
                <Header/>
                <div className="main-Content">
                    <Route path='/profile/:userID?' render={() => <ProfileConteiner/>}/>
                    <Route path='/messages' render={() => <Messages/>}/>
                    <Route path='/users' render={() => <UsersConteiner/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    };
};
const  mapStateToProps = (state) => ({
    initialized : state.app.initialized
});
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
