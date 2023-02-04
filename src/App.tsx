import React, {LegacyRef} from 'react';
import './App.css';
import HeaderTop from './components/Header/HeaderTop'
import NavBar from './components/Navbar/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {StoreType} from "./Redux/State";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState();

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderTop/>
            <NavBar/>
            <Switch>
                <Route path="/Dialogs" render={() =>
                    <Dialogs
                        dialogsData={state.dialogsPage}
                    />}/>
                <Route path="/Profile" render={() =>
                    <Profile
                        postsData={state.profilePage}
                        addPostCallback={props.store.addPost.bind(props.store)}
                        changeNewPostText={props.store.changeNewPostText.bind(props.store)}
                    />}/>
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default App