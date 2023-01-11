import React from 'react';
import './App.css';
import HeaderTop from './components/Header/HeaderTop'
import NavBar from './components/Navbar/Navbar'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";


function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}


export default function App() {
    return (

        <div className='app-wrapper'>
            <HeaderTop/>
            <NavBar/>

                <Switch>
                    <Route path="/dialogs" render={() => <Dialogs/>}/>
                    <Route path="/profile" render={() => <Profile/>}/>
                </Switch>
        </div>

    );
}

