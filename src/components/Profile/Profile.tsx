import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePagePropsType = {
    postsData: ProfilePageType
}

export const  Profile = (props: ProfilePagePropsType) => {
    return (
    <div>
        <ProfileInfo />
        <MyPosts postsData={props.postsData.posts} />

    </div>
    )
}

export default Profile;