import React from "react";
import s from './Dialog.module.css'
import {PostType} from "../../Profile/MyPosts/Post/Post";

export type DialogType = {
    id: number,
    userName: string,
    message: string
}

const Dialog = (props: DialogType) => {

    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIz6I9Ede062Ub0VfcTqcRetEVS_AegfutIriwvar&s"></img>
            {props.userName}
            {props.message}
        </div>
    );
}

export default Dialog;
