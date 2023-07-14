import React, { FC } from "react";
import ProfileInfo from "./ProfileInfo";
import NewPostTextArea from "./NewPostTextArea";
import Post from "./Post";
import { NewPostButton } from "./NewPostButton";

type ProfilePageProps = {
    postsData: {
        text: string
    }[]
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {postsData} = props
  
  return (
    <>
      <ProfileInfo />
      <h2>My Posts</h2>
      <NewPostTextArea />
      <NewPostButton />
      {postsData.map((post) => {
        console.log(post);
        return <Post postText={post.text} />;
      })}
    </>
  );
};

export default ProfilePage;
