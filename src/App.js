import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Profile from './Components/MainPages/Profile/Profile';
import Messages from "./Components/MainPages/Messages/Messages";
import {Route} from "react-router-dom";
import Music from "./Components/MainPages/Music/Music";
import Settings from "./Components/MainPages/Settings/Settings";
import News from "./Components/MainPages/News/News";


function App(props) {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="main-Content">
                <Route path='/profile' render={() => <Profile store={props.store}
                                                              postsObj={props.store.getState().profilePage.PostsObj}/>}/>
                <Route path='/messages' render={() => <Messages store={props.store}
                />}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    );
}


export default App;
