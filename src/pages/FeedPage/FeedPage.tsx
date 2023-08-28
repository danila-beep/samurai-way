import React, { FC } from "react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import FeedRightSideBar from "../../components/FeedRightSideBar/FeedRightSideBar";
import { SideBar } from "../../components/SideBar/SideBar";

type FeedPageProps = {};

const FeedPage: FC<FeedPageProps> = (props) => {
  return (
    <>
      <SideBar />
      <FeedPosts />
      <FeedRightSideBar />
      {/* <div>1</div>
      <div>2</div>
      <div>3</div> */}
    </>
  );
};

export default FeedPage;
