import React, { FC } from "react";
import s from "./sideBar.module.css";
import { NavLink } from "react-router-dom";
import {
  UilUser,
} from "@iconscout/react-unicons";
import miniAva from "../../assets/UserImageSample.jpg";
import { useAppSelector } from "../../utils/hooks/useAppSelector";

type SideBarProps = {};

export const SideBar: FC<SideBarProps> = (props) => {
  const sideBarData = useAppSelector((state) => state.sideBar);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const loggedUserData = useAppSelector((state) => state.app);

  const sideBarUserPhotoRender = () => {
    return isAuthorized ? (
      loggedUserData.photos?.small ? (
        loggedUserData.photos.small
      ) : (
        <img src={miniAva} alt="" />
      )
    ) : (
      <UilUser />
    );
  };

  const sideBarUserNameRender = () => {
    return isAuthorized ? loggedUserData.fullName : "login"
  }

  const sideBarUserLinkRender = () => {
    return isAuthorized ? `@${loggedUserData.fullName}:${loggedUserData.userId}` : ""
  }

  const navigationItemsForRender = sideBarData.map((navI) => {
    return (
      <NavLink
        to={`/${navI.link}`}
        key={navI.link}
        className={s.sideBarItem}
        activeClassName={s.sideBarItemActive}
      >
        {navI.icon}
        {navI.title}
      </NavLink>
    );
  });
  return (
    <div className={s.sideBarContainer}>
      <div className={s.sideBarUserContainer}>
        <div className={s.sideBarUserImage}>{sideBarUserPhotoRender()}</div>
        <div className={s.sideBarUserInfo}>
          <p>{sideBarUserNameRender()}</p>
          <NavLink to={"/profile"}>{sideBarUserLinkRender()}</NavLink>
        </div>
      </div>
      <hr className={s.separator} />
      <div className={s.sideBarList}>{navigationItemsForRender}</div>
    </div>
  );
};
