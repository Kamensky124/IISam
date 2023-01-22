import React from 'react';
import './App.css';
import HeaderTop from './components/Header/HeaderTop'
import NavBar from './components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {RootStateType} from "./Redux/State";

type AppPropsType = {
    state: RootStateType
}

const App = (props: AppPropsType) => {

    // let message = state.profilePage.posts[0].message;
    //debugger
    // let a = props.state.dialogsPage.dialogs
    // console.log(a)

    // console.log (b)

    return (

        <div className='app-wrapper'>
            <HeaderTop/>
            <NavBar/>
            <Switch>
                <Route path="/Dialogs" render={() =>
                    <Dialogs
                        dialogsData={props.state.dialogsPage}
                    />}/>
                <Route path="/Profile" render={() =>
                    <Profile
                        postsData={props.state.profilePage}
                    />}/>
            </Switch>
        </div>

    );
}

export default App