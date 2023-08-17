import React from "react";
import s from "./feedRightSideBar.module.css";
import miniAva from "../../assets/UserImageSample.jpg";
import { UilPlus } from "@iconscout/react-unicons";
import { useAppSelector } from "../../utils/hooks/useAppSelector";
import RequestUserCard from "../RequestUserCard/RequestUserCard";
import FriendMiniature from "../FriendMiniature/FriendMiniature";

const FeedRightSideBar = () => {
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  return (
    <div className={s.feedPageRightSideBarContainer}>
      <div className={s.feedPageRightSideBarRequestsContainer}>
        <h4>Requests</h4>
        {isAuthorized ? (
          <div>
            <RequestUserCard />
            <RequestUserCard />
            <RequestUserCard />
            <RequestUserCard />
            <RequestUserCard />
            <RequestUserCard />
          </div>
        ) : (
          "..."
        )}
      </div>
      <div className={s.feedPageRightSideBarFriendsContainer}>
        <h4>Friends</h4>
        {isAuthorized ? (
          <div>
            <FriendMiniature />
            <FriendMiniature />
            <FriendMiniature />
            <FriendMiniature />
            <FriendMiniature />
          </div>
        ) : (
          "..."
        )}
      </div>
    </div>
  );
};

export default FeedRightSideBar;
