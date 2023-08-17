import React, { useEffect, useState } from "react";
import s from "./usersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  UserPageType,
  currentPageChangerAC,
  followUserAC,
  followUserTC,
  getUsersTC,
  nextPagesPaginationAC,
  previousPagesPaginationAC,
  setTotalUsersCount,
  setUsersAC,
  unfollowUserAC,
  unfollowUserTC,
} from "../../store/reducers/usersReducer";
import { Button } from "../../shared/Button";
import axios from "axios";
import styled from "styled-components";
import { UilArrowLeft, UilArrowRight } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import { useSessionStorage } from "usehooks-ts";
import Preloader from "../../shared/Preloader";
import { SideBar } from "../../components/SideBar/SideBar";
import { useAppSelector } from "../../utils/hooks/useAppSelector";

const UsersPage = () => {
  //getting data from redux
  const usersPageData = useSelector<RootState, UserPageType>(
    (state) => state.usersPage
  );
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const dispatch = useDispatch();

  //API "get" call for users
  useEffect(() => {
    dispatch(getUsersTC(usersPageData.currentPage, usersPageData.pageSize));
  }, [dispatch, usersPageData.currentPage, usersPageData.pageSize]);

  const usersForRender = usersPageData.users.items.map((user) => {
    return (
      <div className={s.userPageUserCardContainer}>
        <NavLink to={`profile/${user.id}`}>
          <img
            src={
              user.photos.large
                ? user.photos.large
                : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png"
            }
            alt=""
          />
        </NavLink>
        <h3>{user.name}</h3>
        <div className={s.userPageCardButtonsContainer}>
          <button
            className={s.followButton}
            onClick={() => followButtonHandler(user.followed, user.id)}
            disabled={!isAuthorized && !user.followed ? true : false}
          >
            Follow
          </button>
          <button
            className={s.unfollowButton}
            onClick={() => unfollowButtonHandler(user.followed, user.id)}
            disabled={!isAuthorized && user.followed ? false : true}
          >
            Unfollow
          </button>
        </div>
      </div>
    );
  });

  //pagination
  const pagesForRender = usersPageData.paginationCount.map((page) => {
    return (
      <div
        className={s.userPagePaginationItem}
        onClick={() => changePageHandler(page)}
      >
        {page}
      </div>
    );
  });

  const pagesCount = Math.ceil(
    usersPageData.totalUsersCount / usersPageData.pageSize
  );

  const changePageHandler = (page: number) => {
    dispatch(currentPageChangerAC(page));
  };

  const nextPages = () => {
    dispatch(nextPagesPaginationAC(pagesCount));
  };
  const previousPages = () => {
    dispatch(previousPagesPaginationAC(pagesCount));
  };

  //follow / unfollow
  const followButtonHandler = (isFollowed: boolean, userId: number) => {
    dispatch(followUserTC(userId));
  };
  const unfollowButtonHandler = (isFollowed: boolean, userId: number) => {
    dispatch(unfollowUserTC(userId));
  };

  return usersPageData.isFetching ? (
    <Preloader />
  ) : (
    <div className={s.userPageContainer}>
      <SideBar />
      <div className={s.userPageUsersListContainer}>
        <div>{usersForRender}</div>
        <div className={s.userPagePaginationContainer}>
          <div
            className={s.userPagePaginationChangeButton}
            onClick={previousPages}
          >
            <UilArrowLeft />
          </div>
          {pagesForRender}
          <div className={s.userPagePaginationChangeButton} onClick={nextPages}>
            <UilArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
