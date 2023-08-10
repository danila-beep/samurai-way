import React, { useEffect } from "react";
import s from "./profilePage.module.css";
import {
  UilCommentDots,
  UilDraggabledots,
  UilEdit,
  UilUser,
} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useParams } from "react-router-dom";
import { setUserProfileTC } from "../../store/reducers/profileReducer";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profilePageData = useSelector((state: RootState) => state.profilePage);
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    dispatch(setUserProfileTC(userId));
  }, []);

  return (
    <div className={s.profilePageContainer}>
      <div className={s.profilePageHeaderContainer}>
        <img
          src={
            "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjJTIwb3MlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
          alt=""
        />
        <div className={s.profilePageHeaderProfileInfo}>
          <div className={s.profilePageHeaderProfileInfoLeftContainer}>
            <div className={s.profilePageHeaderProfileInfoUserImage}>
              <img
                src={
                  profilePageData.profile.photos?.large
                    ? profilePageData.profile.photos?.large
                    : "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png"
                }
                alt=""
              />
            </div>
            <div className={s.profilePageHeaderProfileInfoUserName}>
              <h2>{profilePageData.profile.fullName}</h2>
              <p>followers: nnn</p>
            </div>
          </div>
          <div className={s.profilePageHeaderProfileInfoRightContainer}>
            <button className={s.editButton}>
              <UilEdit />
              Edit Profile
            </button>
            <button className={s.moreActionsButton}>
              <UilDraggabledots />
            </button>
          </div>
        </div>
        <hr />
        <div className={s.profilePageHeaderNavigation}>
          <ul>
            <li>Posts</li>
            <li>About</li>
            <li>Photos</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
