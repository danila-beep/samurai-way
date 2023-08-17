import React, { useState } from "react";
import s from "./addPostContainer.module.css";
import {
  UilUser,
  UilSmile,
  UilArrowRight,
  UilVideo,
  UilImage,
  UilEmoji,
} from "@iconscout/react-unicons";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch";
import { useAppSelector } from "../../utils/hooks/useAppSelector";
import { addPostTC } from "../../store/reducers/feedReducer";

const AddPostContainer = () => {
  const dispatch = useAppDispatch();
  const loggedUserImage = useAppSelector((state) => state.app.photos?.small);
  const loggedUserId = useAppSelector((state) => state.app.userId);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const addPost = () => {
    dispatch(
      addPostTC(
        loggedUserId ? loggedUserId : 12312,
        "Post title",
        textAreaValue
      )
    );
    setTextAreaValue("");
  };
  return (
    <div className={s.feedPageAddPostContainer}>
      <div className={s.feedPageAddPostHeaderContainer}>
        <div className={s.feedPageAddPostHeaderUserImage}>
          {isAuthorized && loggedUserImage ? loggedUserImage : <UilUser />}
        </div>
        <div className={s.feedPageAddPostHeaderTextareaContainer}>
          <textarea
            placeholder="Write the new post..."
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.currentTarget.value)}
          />
          <div className={s.feedPageAddPostHeaderTextAreaActionBtnsContainer}>
            <UilSmile />
            <UilArrowRight onClick={addPost} />
          </div>
        </div>
      </div>
      <div className={s.feedPageAddPostReactionsContainer}>
        <ul>
          <li>
            <UilVideo />
            <p>Live</p>
          </li>
          <li>
            <UilImage />
            <p>Photo/Video</p>
          </li>
          <li>
            <UilEmoji />
            <p>Activity</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddPostContainer;
