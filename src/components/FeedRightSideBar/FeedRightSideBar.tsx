import React from "react";
import s from "./feedRightSideBar.module.css";
import miniAva from "../../assets/UserImageSample.jpg";
import { UilPlus } from "@iconscout/react-unicons";

const FeedRightSideBar = () => {
  return (
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
  );
};

export default FeedRightSideBar;
