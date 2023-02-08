import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../Redux/Store";

 const Post = (props: PostType) => {

    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIz6I9Ede062Ub0VfcTqcRetEVS_AegfutIriwvar&s"></img>
            {props.message}
            <span>Like: {props.likesCount}</span>
        </div>);
}
export default Post;
