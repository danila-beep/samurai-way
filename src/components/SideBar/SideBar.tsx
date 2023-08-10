import React, { FC } from "react";
import s from "./sideBar.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/store";
import { UilHome, UilOperaAlt, UilPolygon } from "@iconscout/react-unicons";
import miniAva from "../../assets/UserImageSample.jpg"

type SideBarProps = {};

export const SideBar: FC<SideBarProps> = (props) => {
  const sideBarData = useSelector((state: RootState) => state.sideBar);

  const navigationItemsForRender = sideBarData.map((navI) => {
    return (
      <NavLink
        to={`/${navI.link}`}
        key={navI.link}
        className={s.sideBarItem}
        activeClassName={s.sideBarItemActive}
      >
        <UilHome size={30}/>
        {navI.title}
      </NavLink>
    );
  });
  return (
    <div className={s.sideBarContainer}>
      <div className={s.sideBarUserContainer}>
        <div className={s.sideBarUserImage}>
          <img src={miniAva} alt="" />
        </div>
        <div className={s.sideBarUserInfo}>
          <p>User Name</p>
          <p>@userlink</p>
        </div>
      </div>
      <hr className={s.separator}/>
      <div className={s.sideBarList}>{navigationItemsForRender}</div>
    </div>
  );
};
