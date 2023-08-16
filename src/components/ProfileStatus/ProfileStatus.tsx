import React, { useState, MouseEvent, useEffect } from "react";
import s from "./profileStatus.module.css";
import { UilCommentAltEdit } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getUserStatusTC } from "../../store/reducers/profileReducer";

const ProfileStatus = (props: { userId?: number }) => {
  const dispatch = useDispatch();

  const userStatus = useSelector<RootState, string>((state) =>
    state.profilePage.profile.status ? state.profilePage.profile.status : ""
  );

  useEffect(() => {
    if (props.userId) {
      dispatch(getUserStatusTC(props.userId));
    }
  }, [props.userId, dispatch]);

  return (
    <div className={s.profileStatusWrapper}>
      <UilCommentAltEdit size={40} />
      <p>{userStatus}</p>
    </div>
  );
};

export default ProfileStatus;
