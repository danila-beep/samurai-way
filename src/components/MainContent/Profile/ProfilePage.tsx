import React from 'react';
import ProfileInfo from "./ProfileInfo";
import NewPostTextArea from "./NewPostTextArea";
import Post from "./Post";
import { NewPostButton } from './NewPostButton';

const ProfilePage = () => {
    return (
        <>
            <ProfileInfo/>
            <h2>My Posts</h2>
            <NewPostTextArea />
            <NewPostButton />
            <Post />
            <Post />
        </>
    );
};

export default ProfilePage;