import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {PostType} from "../../../Redux/State"

type myPostsPropsType = {
    postsData: Array<PostType>
}

const MyPosts = (props: myPostsPropsType) => {

    const mappedPosts = props.postsData.map((e: PostType) =>
        <Post
            id={e.id}
            message={e.message}
            likesCount={e.likesCount}
        />
    )

    return (
        <div className={s.item}><h3>My posts</h3>
            <textarea>Add post</textarea>
            <button>Remove</button>

            {mappedPosts}

        </div>)
}
export default MyPosts;