import { Dispatch } from "redux";
import { postsAPI } from "../../api/postsAPI";

const initialState: FeedPageStateType = [];

export const feedReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "feedPage/setPosts":
      return [...state, ...action.data];
    case "feedPage/setImage":
      const foundedPost = state.findIndex((post) => post.id === action.postId);
      return [...state, state[foundedPost].image = action.image];
    default:
      return state;
  }
};

export const setPostsAC = (data: PostType[]) => {
  return { type: "feedPage/setPosts", data } as const;
};
export const setImageAC = (image: string, postId: number) => {
  return { type: "feedPage/setImage", image, postId } as const;
};

export const getPostsTC = () => (dispatch: Dispatch) => {
  postsAPI.getPosts().then((res) => {
    dispatch(setPostsAC(res.data));
  });
};
export const getImageTC = (postId: number) => (dispatch: Dispatch) => {
    debugger
  postsAPI.getImages().then((res) => {
    dispatch(setImageAC(res.data, postId));
  })
  .catch(err => {
    console.log(err);
  })
};

type ActionType = ReturnType<typeof setPostsAC> | ReturnType<typeof setImageAC>;

type FeedPageStateType = PostType[];

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
};
