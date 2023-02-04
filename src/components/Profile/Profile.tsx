import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePagePropsType = {
    postsData: ProfilePageType,
    addPostCallback: ()=>void,
    changeNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData.posts}
                addPostCallback={props.addPostCallback}
                changeNewPostText={props.changeNewPostText}
            />

        </div>
    )
}

export default Profile;