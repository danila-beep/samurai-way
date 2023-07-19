import React, { FC } from "react";
import s from "./sideBar.module.css"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/store";
import { UilOperaAlt, UilPolygon } from "@iconscout/react-unicons";

type SideBarProps = {};

export const SideBar: FC<SideBarProps> = (props) => {
  const sideBarData = useSelector((state: RootState) => state.sideBar);

  const navigationItemsForRender = sideBarData.map((navI) => {
    return (
      <div className={s.sideBarItem} key={navI.link}>
        <UilPolygon />
        <NavLink to={`/${navI.link}`}>{navI.title}</NavLink>
      </div>
    );
  });
  return (
    <div className={s.sideBarWrapper}>
      <div className={s.sideBarList}>
        {navigationItemsForRender}
      </div>
    </div>
  );
};
