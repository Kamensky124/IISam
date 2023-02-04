import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {MessageType, PostType} from "../../../Redux/State"
import { text } from "stream/consumers";

type myPostsPropsType = {
    postsData: Array<PostType>,
    addPostCallback: (postText: string)=>void,
    changeNewPostText: (newText: string) => void
}

const MyPosts = (props: myPostsPropsType) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement> ();

    const mappedPosts = props.postsData.map((e: PostType) =>
        <Post
            id={e.id}
            message={e.message}
            likesCount={e.likesCount}
        />
    )

    const addPostRef = () => {
        // alert(postMessageRef.current?.value) //если существует
        if (postMessageRef.current) {
            props.addPostCallback(postMessageRef.current.value)
            postMessageRef.current.value = ""
        }

    }

    const textareaChangeHandler = () => {

        if (postMessageRef.current) {
            let currentText = postMessageRef.current.value;
            props.changeNewPostText (currentText)

        }
    }

    return (
        <div className={s.item}><h3>My posts</h3>

            <textarea
                onChange={textareaChangeHandler}
                ref={postMessageRef}
            ></textarea>

            <button onClick={addPostRef}>AddRef</button>

            <button>Remove</button>
            {mappedPosts}
        </div>)
}
export default MyPosts;