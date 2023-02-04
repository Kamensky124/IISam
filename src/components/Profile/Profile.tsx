import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../Redux/State";

type ProfilePagePropsType = {
    postsData: ProfilePageType,
    addPostCallback: (postText: string)=>void
}

export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData.posts}
                addPostCallback={props.addPostCallback}
            />

        </div>
    )
}

export default Profile;