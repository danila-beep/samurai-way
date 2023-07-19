import React, { useEffect, useState } from "react";
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

  console.log(pagesCount);

  const [pagesForRender, setPagesForRender] = useState<Array<number>>([
    1, 2, 3, 4, 5,
  ]);

  console.log(pagesForRender);

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

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {usersPageData.users.items.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                display: "inline-block",
                padding: "10px",
                margin: "10px",
                border: "1px solid black",
              }}
            >
              <div>
                <img
                  src={
                    user.photos.small
                      ? user.photos.small
                      : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  width={100}
                  alt=""
                />
              </div>
              <span>{user.name}</span>
              <div>
                <Button onClick={() => dispatch(followUserAC(user.id))}>
                  Follow
                </Button>
                <Button onClick={() => dispatch(unfollowUserAC(user.id))}>
                  Unfollow
                </Button>
              </div>
              <div>{user.followed.toString()}</div>
            </div>
          );
        })}
      </div>
      <PageSelectorWrapper>
        <span onClick={previousPages}>back</span>
        {pagesForRender.map((p, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                dispatch(currentPageChengerAC(p));
              }}
            >
              {p}
            </span>
          );
        })}
        <span onClick={nextPages}>next</span>
      </PageSelectorWrapper>
    </div>
  );
};

export default UsersPage;

const PageSelectorWrapper = styled.div`
  & span:hover {
    color: red;
  }
`;
