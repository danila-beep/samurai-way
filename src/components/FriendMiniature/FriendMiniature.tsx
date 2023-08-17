import React from "react";
import s from "./friendMiniature.module.css";
import { UilPlus } from "@iconscout/react-unicons";
import miniAva from "../../assets/UserImageSample.jpg";


const FriendMiniature = () => {
  return (
    <div className={s.feedPageRightSideBarFriendCard}>
      <div>
        <img src={miniAva} alt="" />
        <p>User Name</p>
      </div>
      <UilPlus />
    </div>
  );
};

export default FriendMiniature;
