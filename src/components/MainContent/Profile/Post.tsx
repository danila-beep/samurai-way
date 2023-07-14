import React, { FC } from 'react';

type PostProps = {
    postText: string
}

const Post: FC<PostProps> = (props) => {
    const {postText} = props
    return (
        <div>
            {postText}
        </div>
    );
};

export default Post;