import React from 'react';
import ProfileInfo from "./ProfileInfo";
import NewPostTextArea from "./NewPostTextArea";
import Post from "./Post";

const ProfilePage = () => {
    return (
        <>
            <ProfileInfo/>
            <h2>My Posts</h2>
            <NewPostTextArea />
            <Post />
            <Post />
        </>
    );
};

export default ProfilePage;