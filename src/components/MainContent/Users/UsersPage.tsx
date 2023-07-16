import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  UserPageType,
  followUserAC,
  setUsersAC,
  unfollowUserAC,
} from "../../../store/reducers/usersReducer";
import { Button } from "../../../shared/Button";
import axios from "axios";

const UsersPage = () => {
  const usersPageData = useSelector<RootState, UserPageType>(
    (state) => state.usersPage
  );
  const dispatch = useDispatch();

  const baseURL = "https://social-network.samuraijs.com/api/1.0";

  useEffect(() => {
    const getUsersFromApi = async () => {
      try {
        axios.get(`${baseURL}/users`).then((response) => {
          const data = response.data;
          console.log(data);
          dispatch(setUsersAC(data));
        });
      } catch (error) {
        console.log(error);
      }
    };
    getUsersFromApi();
  }, []);

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
                      : "https://www.istockphoto.com/photos/user-profile"
                  }
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
    </div>
  );
};

export default UsersPage;
