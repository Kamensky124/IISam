import React from "react";
import s from './HeaderTop.module.css'

export type HeaderTopType = {
    title: string
}

const HeaderTop1: HeaderTopType = {
    title: 'Kamensky social network'
}

export const HeaderTop = () => {
    return (
        <div className={s.header}>
            <img src="https://avatars.mds.yandex.net/i?id=0e21b51a394286bd7c62dfa2e36c69dc-5544086-images-thumbs&n=13&exp=1" alt="logo"/>
           {HeaderTop1.title};
        </div>
)}

export default HeaderTop;