import React, { FC, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import NewPostTextArea from "../../../shared/TextArea";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import TextArea from "../../../shared/TextArea";
import { Button } from "../../../shared/Button";
import { addPostAC } from "../../../store/reducers/profileReducer";

type ProfilePageProps = {};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const profilePageData = useSelector((state: RootState) => state.profilePage);
  const dispatch = useDispatch();

  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const addPost = () => {
    const action = addPostAC(textAreaValue);
    dispatch(action);
    setTextAreaValue("")
  };

  return (
    <>
      <ProfileInfo />
      <h2>My Posts</h2>
      <div>
        <TextArea value={textAreaValue} onChange={e => setTextAreaValue(e.currentTarget.value)}/>
      </div>
      <Button onClick={addPost}>Add New Post</Button>
      {profilePageData.posts.map((post) => {
        return <Post postText={post.postText} />;
      })}
    </>
  );
};

export default ProfilePage;
