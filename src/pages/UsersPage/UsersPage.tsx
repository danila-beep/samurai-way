import React, { useEffect, useState } from "react";
import styles from "./usersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  UserPageType,
  currentPageChengerAC,
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

const UsersPage = () => {
  //getting data from redux
  const usersPageData = useSelector<RootState, UserPageType>(
    (state) => state.usersPage
  );
  const dispatch = useDispatch();

  //API "get" call
  useEffect(() => {
    dispatch(getUsersTC(usersPageData.currentPage, usersPageData.pageSize));
  }, [dispatch, usersPageData.currentPage, usersPageData.pageSize]);

  //pagination logic

  const pagesCount = Math.ceil(
    usersPageData.totalUsersCount / usersPageData.pageSize
  );

  const nextPages = () => {
    dispatch(nextPagesPaginationAC(pagesCount));
  };
  const previousPages = () => {
    dispatch(previousPagesPaginationAC(pagesCount));
  };

  //follow / unfollow

  const followButtonHandler = (isFollowed: boolean, userId: number) => {
    if (isFollowed) {
      dispatch(unfollowUserTC(userId));
    } else {
      dispatch(followUserTC(userId));
    }
  };

  return (
    <div className={styles.usersPageWrapper}>
      {usersPageData.isFetching ? (
        <div className={styles.preloaderContainer}>
          <Preloader />
        </div>
      ) : (
        <div>
          <div className={styles.usersList}>
            {usersPageData.users.items.map((user) => {
              return (
                <div key={user.id} className={styles.userCard}>
                  <div className={styles.userCardHeader}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJywAxz6Z9hzwF0VZ3FdVkZ9o1I1_7wN72w&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className={styles.userCardUserInfo}>
                    <NavLink to={`profile/${user.id}`}>
                      <img
                        src={
                          user.photos.small
                            ? user.photos.small
                            : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        }
                        width={100}
                        alt=""
                      />
                    </NavLink>
                    <span>{user.name}</span>
                  </div>
                  <div className={styles.userCardFollowButtons}>
                    <Button
                      onClick={() =>
                        followButtonHandler(user.followed, user.id)
                      }
                    >
                      {user.followed ? "Unfollow" : "Follow"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.pagesWrapper}>
            <span className={styles.pagesListChanger} onClick={previousPages}>
              <UilArrowLeft />
            </span>
            {usersPageData.paginationCount.map((p, index) => {
              return (
                <NavLink
                  to={`friends`}
                  className={styles.pageItem}
                  key={index}
                  onClick={() => {
                    dispatch(currentPageChengerAC(p));
                  }}
                >
                  {p}
                </NavLink>
              );
            })}
            <span onClick={nextPages}>
              <UilArrowRight />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
