import React, { FC, useEffect, useState } from "react";
import s from "./post.module.css";
import {
  UilComment,
  UilElipsisDoubleVAlt,
  UilThumbsDown,
  UilThumbsUp,
  UilUser,
} from "@iconscout/react-unicons";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch";
import { useAppSelector } from "../../utils/hooks/useAppSelector";
import { socialMediaAPI } from "../../api/socialMediaAPI";
import { ProfileInfoType } from "../../store/reducers/profileReducer";
import { NavLink } from "react-router-dom";
import { getRandomName } from "../../utils/userNameGenerator";
import miniAva from "../../assets/UserImageSample.jpg";
import { AvatarGenerator } from "random-avatar-generator";

type PostProps = {
  postText: string;
  postId: number;
  userId: number;
};

const Post: FC<PostProps> = (props) => {
  const { postText } = props;
  const imagesForPosts = useAppSelector<string[]>((state) => state.feed.images);
  const avatarGenerator = new AvatarGenerator();
  const loggedUserId = useAppSelector((state) => state.app.userId);
  const loggedUserName = useAppSelector((state) => state.app.fullName);

  //НЕВОЗМОЖНО РЕАЛИЗОВАТЬ ТАК КАК ЕСТЬ ОГРАНИЧЕНИЕ НА КОЛИЧЕСТВО ЗАПРОСОВ

  // const [localPostData, setLocalPostData] = useState<ProfileInfoType>();

  // useEffect(() => {
  //   socialMediaAPI.getUserProfile(props.userId).then((res) => {
  //     setLocalPostData(res.data);
  //   });
  // }, [props.userId]);

  // console.log(localPostData);

  return (
    <div className={s.postWrapper}>
      <div className={s.postHeader}>
        {props.userId === loggedUserId ? (
          <NavLink
            to={`/profile/${loggedUserId}`}
            className={s.postHeaderUserName}
          >
            <img src={miniAva} alt="" />
            <h3>{loggedUserName}</h3>
          </NavLink>
        ) : (
          <NavLink
            to={`/profile/${Math.floor(Math.random() * 29826)}`}
            className={s.postHeaderUserName}
          >
            <img src={avatarGenerator.generateRandomAvatar()} alt="" />
            <h3>{getRandomName()}</h3>
          </NavLink>
        )}
        <div className={s.postHeaderOptions}>
          <UilElipsisDoubleVAlt />
        </div>
      </div>
      <div className={s.postBody}>
        <p>{postText}</p>
        <img
          src={
            imagesForPosts[Math.floor(Math.random() * imagesForPosts.length)]
          }
          alt=""
        />
      </div>
      <div className={s.postShare}>
        <UilComment />
        <UilThumbsUp />
        <UilThumbsDown />
      </div>
    </div>
  );
};

export default Post;
