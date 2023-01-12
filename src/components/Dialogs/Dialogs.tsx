import React, {useState} from 'react';
import s from './Dialogs.module.css';
import Dialog, {DialogType} from "./Dialog/Dialog"
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

const Dialogs = () => {
    return (

        <div className={s.dialogs_content}>

            <div className={s.dialogsColumnNames}>

               {/*for (let i=0; i < DialogData[i].length; i++) {}*/}
                <Dialog id={DialogData[1].id} userName={DialogData[1].userName} message={DialogData[1].message}/>
                <Dialog id={DialogData[2].id} userName={DialogData[2].userName} message={DialogData[2].message}/>
                <Dialog id={DialogData[3].id} userName={DialogData[3].userName} message={DialogData[3].message}/>

            </div>

            <div className={s.dialogsColumnMessages}>
                <div className={s.avaAndMessage}>{DialogData[0].message}</div>
                <div className={s.avaAndMessage}>{DialogData[1].message}</div>
                <div className={s.avaAndMessage}>{DialogData[3].message}</div>
            </div>

            {/*?как дать css класс созданной компоненте с TS*/}
            {/*className = {classNames('s.item')}*/}
            <div className={s.item}>
                <Dialog
                    id={DialogData[1].id}
                    userName={DialogData[1].userName}
                    message={DialogData[1].message}
                />
            </div>

        </div>)
}

export default Dialogs;