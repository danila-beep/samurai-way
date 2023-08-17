import React from "react";
import s from "./requestUserCard.module.css";
import miniAva from "../../assets/UserImageSample.jpg";


const RequestUserCard = () => {
  return (
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
  );
};

export default RequestUserCard;
