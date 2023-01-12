import React, {useState} from 'react';
import s from './Dialogs.module.css';
import Dialog, {DialogType} from "./Dialog/Dialog";
import classNames from "classnames";
import {NavLink} from "react-router-dom";

let DialogData = [
    {id: 1, userName: 'Andrey', message: 'hello world'},
    {id: 2, userName: 'Masha', message: 'I like hobbits'},
    {id: 3, userName: 'Igor', message: 'JS is best!'},
    {id: 4, userName: 'Olya', message: 'Try runnning'},
    {id: 5, userName: 'Vasya', message: 'Do you like milk?'},
    {id: 6, userName: 'Kolyan', message: 'So so'},
    {id: 7, userName: 'Peter', message: 'I am troll'}
]

//     <NavLink className={`${s.avaAndName} ${s.active}`} to="/Dialogs/1">
//     {DialogData[0].userName}
// </NavLink>

function Сommunication(props: DialogType) {
    return (
        <div className={s.avaAndMessage}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIz6I9Ede062Ub0VfcTqcRetEVS_AegfutIriwvar&s"></img>
            {props.message}
        </div>
    );
}

const Dialogs = () => {
    return (
        <div className={s.dialogs_content}>

            <div className={s.dialogsColumnNames}>
                <Dialog id={DialogData[1].id} userName={DialogData[1].userName} message={DialogData[1].message}/>
                <Dialog id={DialogData[2].id} userName={DialogData[2].userName} message={DialogData[2].message}/>
                <Dialog id={DialogData[3].id} userName={DialogData[3].userName} message={DialogData[3].message}/>
            </div>
            <div className={s.dialogsColumnMessages}>
                <Сommunication id={DialogData[1].id} userName={DialogData[1].userName} message="hi"/>
                <Сommunication id={DialogData[1].id} userName={DialogData[1].userName} message="yo!"/>

            </div>
        </div>
    )
}

export default Dialogs;