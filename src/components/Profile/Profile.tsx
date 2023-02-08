import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../Redux/Store";

type ProfilePagePropsType = {
    postsData: ProfilePageType,
    addPostCallback: () => void,
    changeNewPostText: (newText: string) => void,
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData.posts}
                addPostCallback={props.addPostCallback}
                changeNewPostText={props.changeNewPostText}
                dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile;