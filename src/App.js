import './App.css';
import Header from './Components/Header/Header';
import Messages from "./Components/MainPages/Messages/Messages";
import {Route} from "react-router-dom";
import Settings from "./Components/MainPages/Settings/Settings";
import News from "./Components/MainPages/News/News";
import ProfileConteiner from "./Components/MainPages/Profile/ProfileConteiner";
import UsersConteiner from "./Components/MainPages/Users/UsersConteiner";
import Login from "./Components/MainPages/LoginPage/LoginPage";


function App(props) {

    return (

        <div>
            <Header />

            <div className="main-Content">
                <Route path='/profile/:userID?' render={() => <ProfileConteiner />}/>
                <Route path='/messages' render={() => <Messages  />}/>
                <Route path='/users' render={() => <UsersConteiner />}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/login' render={() => <Login />}/>
            </div>
        </div>

    );
}


export default App;
