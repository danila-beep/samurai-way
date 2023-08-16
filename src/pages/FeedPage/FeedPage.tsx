import React, { FC, useEffect, useState } from "react";
import s from "./feedPage.module.css";
import Post from "../../components/Post/Post";
import { addPostAC } from "../../store/reducers/profileReducer";
import {
  UilArrowRight,
  UilEmoji,
  UilImage,
  UilPlus,
  UilSmile,
  UilUser,
  UilVideo,
} from "@iconscout/react-unicons";
import { SideBar } from "../../components/SideBar/SideBar";
import miniAva from "../../assets/UserImageSample.jpg";
import { useAppSelector } from "../../utils/hooks/useAppSelector";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import FeedRightSideBar from "../../components/FeedRightSideBar/FeedRightSideBar";
import { getPostsTC } from "../../store/reducers/feedReducer";

type FeedPageProps = {};

const FeedPage: FC<FeedPageProps> = (props) => {
  return (
    <div className={s.feedPageWrapper}>
      <SideBar />
      <FeedPosts />
      <FeedRightSideBar />
    </div>
  );
};

export default FeedPage;
