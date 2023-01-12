import React from "react";
import s from './ProfileInfo.module.css'

export const  ProfileInfo = () => {
    return <div>
        <img
            src='https://avatars.mds.yandex.net/i?id=0eea00635c5b0881dcb629d16eac6640e2e4d59f-8217704-images-thumbs&n=13&exp=1'></img>
        <div className={s.descriptionBlock}>Ava+desc</div>
    </div>;
}
