import React from "react";
import s from './Dialog.module.css'
import {PostType} from "../../Profile/MyPosts/Post/Post";
import {NavLink} from "react-router-dom";

export type DialogType = {
    id: number,
    userName: string,
    message: string
}

const Dialog = (props: DialogType) => {

    return (

        <NavLink className={s.avaAndName} to={"/Dialogs/"+props.id}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIz6I9Ede062Ub0VfcTqcRetEVS_AegfutIriwvar&s"></img>
            {props.userName}
        </NavLink>
    );
}

export default Dialog;
