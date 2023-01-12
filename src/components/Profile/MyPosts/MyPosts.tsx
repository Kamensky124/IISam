import React from "react";
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post"

let PostData = [
    {id: 1, userName: 'Andrey', message: 'hello world', age:24, likeCount:20},
    {id: 2, userName: 'Masha', message: 'I like hobbits', age:24, likeCount:20},
]

const MyPosts = () => {
    return (
        <div className={s.item}><h3>My posts</h3>
            <textarea>Add post</textarea>
            <button>Remove</button>
            <Post
                id={PostData[0].id}
                userName={PostData[0].userName}
                message={PostData[0].message}
                age={PostData[0].age}
                likeCount={PostData[0].likeCount}
            />
            <Post
                id={PostData[1].id}
                userName={PostData[1].userName}
                message={PostData[1].message}
                age={PostData[1].age}
                likeCount={PostData[1].likeCount}
            />

        </div>)
}
export default MyPosts;