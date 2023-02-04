import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {MessageType, PostType} from "../../../Redux/State"

type myPostsPropsType = {
    postsData: Array<PostType>,
    addPostCallback: (postText: string)=>void
}

const MyPosts = (props: myPostsPropsType) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement> ();

    const addPostRef = () => {
        // alert(postMessageRef.current?.value) //если существует
        if (postMessageRef.current) {
            props.addPostCallback(postMessageRef.current.value)
        }
        // debugger
    }

    const mappedPosts = props.postsData.map((e: PostType) =>
        <Post
            id={e.id}
            message={e.message}
            likesCount={e.likesCount}
        />
    )

    return (
        <div className={s.item}><h3>My posts</h3>

            <textarea ref={postMessageRef}></textarea>

            <button onClick={addPostRef}>AddRef</button>

            <button>Remove</button>
            {mappedPosts}
        </div>)
}
export default MyPosts;