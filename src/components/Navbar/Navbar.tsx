import React from "react";
import classes from './Navbar.module.css'
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// activeClassName - необходимо заменить на className = { navData => navData.isActive ? s.active : s.item }

const NavBar = () => {

    // let activeStyle = {
    //     textDecoration: "underline",
    // };

    // let activeClassName = "underline";

    // style={({ isActive }) => isActive ? activeStyle : undefined


    return (<nav className={s.nav}>

        <NavLink to="/profile">Profile</NavLink>
        {/*<NavLink to="/Profile">Profile</NavLink>*/}
    </nav>);

        {/*<nav className={s.nav}>*/}
        {/*nav => nav.isActive ? s.active : s.item*/}
        {/*    { navData => navData.isActive ? s.active : s.item }*/}

        // <div className={ nav => nav.isActive ? s.active : s.item }>
        //
        //     <NavLink to="/Profile">Profile</NavLink>
        // </div>
        // <div >
        //
        //     <NavLink to="/Dialogs">Dialogs</NavLink>
        // </div>

    {/*<div className={`${s.item} ${s.active}`}>*/}
    {/*<div className={s.item}>*/}

        {/*<div className={s.item}>*/}
        {/*    <NavLink to="/News">News</NavLink>*/}
        {/*</div>*/}
        {/*<div className={s.item}>*/}
        {/*    <NavLink to="/Music">Music</NavLink>*/}
        {/*</div>*/}
        {/*<div className={s.item}>*/}
        {/*    <NavLink to="/Settings">Settings</NavLink>*/}
        {/*</div>*/}

}

export default NavBar;