import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (<nav className={s.nav}>
        <NavLink className={`${s.item} ${s.active}`} to="/Profile" >Profile</NavLink>
        <NavLink className={s.item} to="/Dialogs">Dialogs</NavLink>
        <NavLink className={s.item} to="/News">News</NavLink>
        <NavLink className={s.item} to="/Music">Music</NavLink>
        <NavLink className={s.item} to="/Settings">Settings</NavLink>
    </nav>);

}

export default NavBar;