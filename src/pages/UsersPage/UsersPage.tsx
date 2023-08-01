import React, { useEffect, useState } from "react";
import styles from "./usersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  UserPageType,
  currentPageChengerAC,
  followUserAC,
  setTotalUsersCount,
  setUsersAC,
  unfollowUserAC,
} from "../../store/reducers/usersReducer";
import { Button } from "../../shared/Button";
import axios from "axios";
import { baseURL } from "../../constants";
import styled from "styled-components";
import { UilArrowLeft, UilArrowRight } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";

const UsersPage = () => {
  //getting data from redux
  const usersPageData = useSelector<RootState, UserPageType>(
    (state) => state.usersPage
  );
  const dispatch = useDispatch();

  //API call
  useEffect(() => {
    const getUsersFromApi = async () => {
      try {
        axios
          .get(
            `${baseURL}/users?page=${usersPageData.currentPage}&count=${usersPageData.pageSize}`
          )
          .then((response) => {
            const data = response.data;
            console.log(data);
            
            dispatch(setUsersAC(data));
            dispatch(setTotalUsersCount(data.totalCount));
          });
      } catch (error) {
        console.log(error);
      }
    };
    getUsersFromApi();
  }, [usersPageData.currentPage, usersPageData.pageSize]);

  //pagination logic

  const pagesCount = Math.ceil(
    usersPageData.totalUsersCount / usersPageData.pageSize
  );

  const [pagesForRender, setPagesForRender] = useState<Array<number>>([
    1, 2, 3, 4, 5,
  ]);

  const nextPages = () => {
    const nextPagesArray: Array<number> = [...pagesForRender];
    if (nextPagesArray[4] >= pagesCount) {
      setPagesForRender(nextPagesArray);
    } else {
      nextPagesArray.push(nextPagesArray[4] + 1);
      nextPagesArray.shift();
      setPagesForRender(nextPagesArray);
    }
  };
  const previousPages = () => {
    const previousPagesArray: Array<number> = [...pagesForRender];
    if (previousPagesArray[0] <= 1) {
      setPagesForRender(previousPagesArray);
    } else {
      previousPagesArray.pop();
      previousPagesArray.unshift(previousPagesArray[0] - 1);
      setPagesForRender(previousPagesArray);
    }
  };

  const followButtonHandler = (isFollowed: boolean, userId: number) => {
    if (isFollowed) {
      dispatch(unfollowUserAC(userId))
    }
    else {
      dispatch(followUserAC(userId))
    }
  }

  return (
    <div className={styles.usersPageWrapper}>
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
                <img
                  src={
                    user.photos.small
                      ? user.photos.small
                      : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  width={100}
                  alt=""
                />
                <span>{user.name}</span>
              </div>
              <div className={styles.userCardFollowButtons}>
                <Button onClick={() => followButtonHandler(user.followed, user.id)}>
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
        {pagesForRender.map((p, index) => {
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
  );
};

export default UsersPage;
