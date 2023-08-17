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
import { PostType, getImageTC } from "../../store/reducers/feedReducer";
import { useAppSelector } from "../../utils/hooks/useAppSelector";
import { imagesForPosts } from "../../entities/imagesForPosts";
import { socialMediaAPI } from "../../api/socialMediaAPI";
import { ProfileInfoType } from "../../store/reducers/profileReducer";
import { NavLink } from "react-router-dom";

type PostProps = {
  postText: string;
  postId: number;
  userId: number;
};

const Post: FC<PostProps> = (props) => {
  const { postText } = props;
  const dispatch = useAppDispatch();
  const totalUserCount = useAppSelector(state => state.usersPage.totalUsersCount)


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
        <NavLink
          to={`/profile/${Math.floor(Math.random() * 29826)}`}
          className={s.postHeaderUserName}
        >
          <UilUser />
          <h3>user:{Math.floor(Math.random() * 29826)}</h3>
        </NavLink>
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
