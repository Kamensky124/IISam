import React from 'react';
import s from './Dialogs.module.css';
import Dialog, {DialogType} from "./Dialog/Dialog"
import classNames from "classnames";

let DialogData = [
    {id: 1, userName: 'Andrey', message: 'hello world'},
    {id: 2, userName: 'Masha', message: 'I like hobbits'},
    {id: 3, userName: 'Igor', message: 'JS is best!'},
    {id: 4, userName: 'Olya', message: 'Try runnning'},
    {id: 5, userName: 'Vasya', message: 'Do you like milk?'},
    {id: 6, userName: 'Kolyan', message: 'So so'},
    {id: 7, userName: 'Peter', message: 'I am troll'}
]



const Dialogs = () => {
    return (

        <div className={s.dialogs_content}>

            <div className={s.dialogsColumnNames}>
                <div className={s.avaAndName}>{DialogData[0].userName}</div>
                <div className={s.avaAndName}>{DialogData[1].userName}</div>
            </div>

            <div className={s.dialogsColumnMessages}>
                <div className={s.avaAndName}>{DialogData[0].message}</div>
                <div className={s.avaAndName}>{DialogData[1].message}</div>
                <div className={s.avaAndName}>{DialogData[3].message}</div>
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