import React, { FC, useState } from "react";
import s from "./feedPage.module.css";
import Post from "../../components/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import TextArea from "../../shared/TextArea";
import { Button } from "../../shared/Button";
import { addPostAC } from "../../store/reducers/profileReducer";
import {
  UilCommentDots,
  UilPen,
  UilPlus,
  UilUser,
} from "@iconscout/react-unicons";

type FeedPageProps = {};

const FeedPage: FC<FeedPageProps> = (props) => {
  const profilePageData = useSelector((state: RootState) => state.profilePage);
  const dispatch = useDispatch();

  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const addPost = () => {
    dispatch(addPostAC(textAreaValue));
    setTextAreaValue("");
  };

  return (
    <div className={s.feedPageWrapper}>
      <div className={s.addPostFormWrapper}>
        <div className={s.createPostTextArea}>
          <UilUser />
          <textarea
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.currentTarget.value)}
            placeholder="What`s on your mind..."
          />
        </div>
        <div className={s.createPostShareContainer}>
          <div className={s.createPostButton} onClick={addPost}>
            <UilPen size={"1rem"} />
            <p>Create Post</p>
          </div>
          <UilPlus />
        </div>
      </div>
      {profilePageData.posts.map((post) => {
        return <Post postText={post.postText} />;
      })}
    </div>
  );
};

export default FeedPage;
