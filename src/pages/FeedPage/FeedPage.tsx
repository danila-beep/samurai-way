import React, { FC, useState } from "react";
import s from "./feedPage.module.css";
import Post from "../../components/Post/Post";
import {
  addPostAC,
} from "../../store/reducers/profileReducer";
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

type FeedPageProps = {};

const FeedPage: FC<FeedPageProps> = (props) => {
  const profilePageData = useAppSelector(state => state.profilePage);
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(state => state.auth.isAuthorized)

  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const addPost = () => {
    dispatch(addPostAC(textAreaValue));
    setTextAreaValue("");
  };

  

  return (
    <div className={s.feedPageWrapper}>
      <div className={s.feedPageSideBar}>
        <SideBar />
      </div>
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
              <div
                className={s.feedPageAddPostHeaderTextAreaActionBtnsContainer}
              >
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
          {profilePageData.posts.map((post) => [
            <Post postText={post.postText} />,
          ])}
        </div>
      </div>
      <div className={s.feedPageRightSideBarContainer}>
        <div className={s.feedPageRightSideBarRequestsContainer}>
          <h4>Requests</h4>
          <div className={s.feedPageRightSideBarRequestsUserCardContainer}>
            <div className={s.feedPageRightSideBarRequestsUserCardInfo}>
              <div className={s.feedPageRightSideBarRequestsUserCardImage}>
                <img src={miniAva} alt="" />
              </div>
              <div className={s.feedPageRightSideBarRequestsUserCardText}>
                <p>User Name</p>
                <p>@userlink</p>
              </div>
            </div>
            <div className={s.feedPageRightSideBarRequestsUserCardButtons}>
              <button className={s.confirmButton}>Confirm</button>
              <button className={s.ignoreButton}>Ignore</button>
            </div>
          </div>
        </div>
        <div className={s.feedPageRightSideBarFriendsContainer}>
          <h4>Friends</h4>
          <div className={s.feedPageRightSideBarFriendCard}>
            <div>
              <img src={miniAva} alt="" />
              <p>User Name</p>
            </div>
            <UilPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
