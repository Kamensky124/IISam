import React, {LegacyRef} from 'react';
import './App.css';
import HeaderTop from './components/Header/HeaderTop'
import NavBar from './components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {addPost, changeNewPostText, RootStateType} from "./Redux/State";

type AppPropsType = {
    state: RootStateType
    addPostCallback: (postText: string) => void,
    changeNewPostText: (newText: string) => void
}


const App = (props: AppPropsType) => {
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
                        addPostCallback={props.addPostCallback}
                        changeNewPostText={props.changeNewPostText}
                    />}/>
            </Switch>
        </div>
    );
}

export default App