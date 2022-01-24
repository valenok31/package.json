import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUserContainer from "./components/FindUser/FindUserContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicCon from "./components/Music/MusicCon";
import {connect} from "react-redux";
import {getUsersRed} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
                this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' render={() => <MusicCon/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/find-user' render={() => <FindUserContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({

    initialized: state.appRe.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);