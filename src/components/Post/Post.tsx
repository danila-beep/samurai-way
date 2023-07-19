import React, { FC } from 'react';
import s from "./post.module.css"
import { UilClosedCaptioningSlash, UilComment, UilElipsisDoubleVAlt, UilPresentationEdit, UilThumbsDown, UilThumbsUp, UilUser } from '@iconscout/react-unicons';

type PostProps = {
    postText: string
}

const Post: FC<PostProps> = (props) => {
    const {postText} = props
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