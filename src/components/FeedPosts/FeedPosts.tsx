import {
  UilUser,
  UilSmile,
  UilArrowRight,
  UilVideo,
  UilImage,
  UilEmoji,
} from "@iconscout/react-unicons";
import React, { useEffect, useState } from "react";
import s from "./feedPosts.module.css";
import Post from "../Post/Post";
import { addPostAC } from "../../store/reducers/profileReducer";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch";
import { useAppSelector } from "../../utils/hooks/useAppSelector";
import {
  PostType,
  getImageTC,
  getPostsTC,
} from "../../store/reducers/feedReducer";

const FeedPosts = () => {
  const postsData = useAppSelector<PostType[]>((state) => state.feed);
  const dispatch = useAppDispatch();

  const [textAreaValue, setTextAreaValue] = useState<string>("");

  useEffect(() => {
    dispatch(getPostsTC());
  }, [dispatch]);

  const addPost = () => {
    dispatch(addPostAC(textAreaValue));
    setTextAreaValue("");
  };

  return (
    <div className={s.feedPageContainer}>
      <div className={s.feedPageAddPostContainer}>
        <div className={s.feedPageAddPostHeaderContainer}>
          <div className={s.feedPageAddPostHeaderUserImage}>
            <UilUser />
          </div>
          <div className={s.feedPageAddPostHeaderTextareaContainer}>
            <textarea
              placeholder="Write the new post..."
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.currentTarget.value)}
            />
            <div className={s.feedPageAddPostHeaderTextAreaActionBtnsContainer}>
              <UilSmile />
              <UilArrowRight onClick={addPost} />
            </div>
          </div>
        </div>
        <div className={s.feedPageAddPostReactionsContainer}>
          <ul>
            <li>
              <UilVideo />
              <p>Live</p>
            </li>
            <li>
              <UilImage />
              <p>Photo/Video</p>
            </li>
            <li>
              <UilEmoji />
              <p>Activity</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.feedPagePostsListContainer}>
        {postsData.map((post) => [
          <Post key={post.id} postText={post.body} postId={post.id} userId={post.userId}/>,
        ])}
      </div>
    </div>
  );
};

export default FeedPosts;
