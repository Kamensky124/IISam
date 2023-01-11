import React from 'react';
import './App.css';
import HeaderTop from './components/Header/HeaderTop'
import NavBar from './components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

export default function App() {
    return (

        <div className='app-wrapper'>
            <HeaderTop/>
            <NavBar/>
            <Switch>
                <Route path="/Dialogs" render={() => <Dialogs/>}/>
                <Route path="/Profile" render={() => <Profile/>}/>
            </Switch>
        </div>

    );
}

