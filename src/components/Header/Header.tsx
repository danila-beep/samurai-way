import React from "react";
import s from "./header.module.css";
import {
  UilBell,
  UilMessage,
  UilSearch,
  UilSetting,
  UilUser,
} from "@iconscout/react-unicons";

export const Header = () => {
  return (
    <header className={s.headerWrapper}>
      <div className={s.headerContainer}>
        <div className={s.leftContainer}>
          <h1>Logo</h1>
          <div className={s.headerSearchForm}>
            <UilSearch />
            <input type="text" placeholder="Start typing to search..." />
          </div>
        </div>
        <div className={s.rightContainer}>
          <UilBell size={25} />
          <UilMessage size={25} />
          <UilSetting size={25} />
          <UilUser size={25} />
        </div>
      </div>
    </header>
  );
};
