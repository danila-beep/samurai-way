import React, { useEffect, useState } from "react";
import s from "./feedPosts.module.css";
import Post from "../Post/Post";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch";
import { useAppSelector } from "../../utils/hooks/useAppSelector";
import { PostType, getPostsTC } from "../../store/reducers/feedReducer";
import AddPostContainer from "../AddPostContainer/AddPostContainer";

const FeedPosts = () => {
  const postsData = useAppSelector<PostType[]>((state) => state.feed.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsTC());
  }, [dispatch]);

  return (
    <div className={s.feedPageContainer}>
      <AddPostContainer />
      <div className={s.feedPagePostsListContainer}>
        {postsData.map((post) => [
          <Post
            key={post.id}
            postText={post.body}
            postId={post.id}
            userId={post.userId}
          />,
        ])}
      </div>
    </div>
  );
};

export default FeedPosts;
