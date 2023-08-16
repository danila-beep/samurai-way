import React, { FC, useEffect } from "react";
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

type PostProps = {
  postText: string;
  postId: number;
};

const Post: FC<PostProps> = (props) => {
  const dispatch = useAppDispatch();
  const postData = useAppSelector<PostType>(state => state.feed[props.postId])
  
  useEffect(() => {
    
    dispatch(getImageTC(props.postId));
  }, [props.postId, dispatch]);

  const { postText } = props;
  return (
    <div className={s.postWrapper}>
      <div className={s.postHeader}>
        <div className={s.postHeaderUserName}>
          <UilUser />
          <h3>User Name</h3>
        </div>
        <div className={s.postHeaderOptions}>
          <UilElipsisDoubleVAlt />
        </div>
      </div>
      <div className={s.postBody}>

        <p>{postText}</p>
        {postData.image ? <img src={postData.image} alt={""}/> : undefined}
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
