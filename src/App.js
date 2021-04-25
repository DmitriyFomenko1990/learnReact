import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Messages from "./Components/MainPages/Messages/Messages";
import {Route} from "react-router-dom";
import Settings from "./Components/MainPages/Settings/Settings";
import News from "./Components/MainPages/News/News";
import ProfileConteiner from "./Components/MainPages/Profile/ProfileConteiner";
import UsersConteiner from "./Components/MainPages/Users/UsersConteiner";


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
            </div>
        </div>

    );
}


export default App;
