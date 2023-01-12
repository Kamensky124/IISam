import React from "react";
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post"

const Post1: PostType = {
    id: 1,
    userName: 'Dima',
    age: 24,
    message: 'how are you',
    likeCount: 20
}

const MyPosts = () => {
    return (
        <div className={s.item}>My posts
            <textarea>Add post</textarea>
            <button>Remove</button>
            <Post
                id={Post1.id}
                userName={Post1.userName}
                message={Post1.message}
                age={Post1.age}
                likeCount={Post1.likeCount}
            />
        </div>)
}
export default MyPosts;