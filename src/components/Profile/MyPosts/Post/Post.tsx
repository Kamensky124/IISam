import React from "react";
import s from './Post.module.css'

export type PostType = {
    id: number,
    message: string,
    userName: string,
    age: number,
    likeCount: number
}

 const Post = (props: PostType) => {

    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIz6I9Ede062Ub0VfcTqcRetEVS_AegfutIriwvar&s"></img>
            {props.userName}
            {props.age}
            {props.message}
            <span>Like: {props.likeCount}</span>
        </div>);
}

export default Post;
