import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// activeClassName - необходимо заменить на className = { navData => navData.isActive ? s.active : s.item }
// let activeStyle = {
//     textDecoration: "underline",
// };
// let activeClassName = "underline";
// style={({ isActive }) => isActive ? activeStyle : undefined

type navData = {

}

// {navData => navData.isActive ? s.active : s.item}

const NavBar = () => {

    return (<nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}><NavLink to="/Profile" >Profile</NavLink></div>
        <div className={s.item}><NavLink to="/Dialogs">Dialogs</NavLink></div>
        <div className={s.item}><NavLink to="/News">News</NavLink></div>
        <div className={s.item}><NavLink to="/Music">Music</NavLink></div>
        <div className={s.item}><NavLink to="/Settings">Settings</NavLink></div>
    </nav>);

    //   nav => nav.isActive ? s.active : s.item*/
    //     { navData => navData.isActive ? s.active : s.item }
    // <div className={ nav => nav.isActive ? s.active : s.item }>
    //     <NavLink to="/Profile">Profile</NavLink>
    // </div>
    // <div >
    //     <NavLink to="/Dialogs">Dialogs</NavLink>
    // </div>
    // <div className={`${s.item} ${s.active}`}>*/
    // <div className={s.item}>*/

}

export default NavBar;