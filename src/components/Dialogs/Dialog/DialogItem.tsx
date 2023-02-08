import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/Store";

const DialogItem = (props: DialogType) => {
    let path = "/Dialogs/" + props.id
    // debugger
    // console.log(props)
    return (

        <NavLink className={s.avaAndName} to={path}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIz6I9Ede062Ub0VfcTqcRetEVS_AegfutIriwvar&s"></img>
            {props.name}
        </NavLink>
    );
}

export default DialogItem
