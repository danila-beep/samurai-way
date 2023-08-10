import React from "react";
import s from "./header.module.css";
import {
  UilBell,
  UilEnvelope,
  UilHome,
  UilMessage,
  UilNewspaper,
  UilPlay,
  UilSearch,
  UilSetting,
  UilUser,
  UilUsersAlt,
  UilYinYang,
} from "@iconscout/react-unicons";
import miniAva from "../../assets/UserImageSample.jpg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.headerWrapper}>
      <div className={s.headerContainer}>
        <div className={s.headerLeftSideContainer}>
          <div className={s.headerIconContainer}>
            <UilYinYang size={50} />
          </div>
          <div className={s.headerSearchContainer}>
            <UilSearch />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className={s.headerNavigation}>
          <ul>
            <li>
              <NavLink to={"/"}>
                <UilHome size={30} />
              </NavLink>
            </li>
            <li>
              <UilNewspaper size={30} />
            </li>
            <li>
              <UilUsersAlt size={30} />
            </li>
            <li>
              <UilPlay size={30} />
            </li>
          </ul>
        </div>
        <div className={s.headerProfileSettings}>
          <ul>
            <li>
              <UilEnvelope />
            </li>
            <li>
              <UilBell />
            </li>
            <li className={s.headerUserImage}>
              <img src={miniAva} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
