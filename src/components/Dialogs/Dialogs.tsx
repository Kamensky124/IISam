import React, {useState} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {DialogPageType, DialogType, MessageType} from "../../Redux/State";

type DialogPropsType = {
    dialogsData: DialogPageType
}

const Dialogs = (props: DialogPropsType) => {
    const mappedDialogs = props.dialogsData.dialogs.map((e: DialogType) =>
        <DialogItem
            id={e.id}
            name={e.name}
        />
    )
    const mappedMessages = props.dialogsData.messages.map((e: MessageType) =>
        <Сommunication
            id={e.id}
            message={e.message}
        />
    )

    return (
        <div className={s.dialogs_content}>

            <div className={s.dialogsColumnNames}>
                {mappedDialogs}
            </div>
            <div className={s.dialogsColumnMessages}>
                {mappedMessages}
            </div>
        </div>
    )
}

function Сommunication(props: MessageType) {
    return (
        <div className={s.avaAndMessage}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIz6I9Ede062Ub0VfcTqcRetEVS_AegfutIriwvar&s"></img>
            {props.message}
        </div>
    );
}



export default Dialogs;