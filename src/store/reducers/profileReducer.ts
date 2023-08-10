import { Dispatch } from "redux";
import { v1 } from "uuid";
import { socialMediaAPI } from "../../api/socialMediaAPI";

const profilePageState = {
  profile: {},
  posts: [],
};

const profileReducer = (
  state: ProfilePageStateType = profilePageState,
  action: ActionsType
) => {
  switch (action.type) {
    case "profilePage/AddPost":
      return {
        ...state,
        posts: [action.newPost, ...state.posts],
      };
    case "profilePage/SetUserProfile": {
      debugger
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
};

//action creators
export const addPostAC = (postText: string) => {
  return {
    type: "profilePage/AddPost",
    newPost: { postId: v1(), postText },
  } as const;
};
export const setUserProfileAC = (profile: ProfileInfoType) => {
  return { type: "profilePage/SetUserProfile", profile } as const;
};

//thunk creators
export const setUserProfileTC =
  (userId: string) => async (dispatch: Dispatch) => {
    socialMediaAPI.getUserProfile(userId).then((res) => {
      dispatch(setUserProfileAC(res.data))
    });
  };

//types
type ProfilePageStateType = {
  profile: ProfileInfoType;
  posts: PostType[];
};

type ProfileInfoType = {
  userId?: number;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  contacts?: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos?: {
    small: string;
    large: string;
  };
};

type PostType = {
  postId: string;
  postText: string;
};

type AddPostActionType = ReturnType<typeof addPostAC>;
type SetUserProfileType = ReturnType<typeof setUserProfileAC>;

type ActionsType = AddPostActionType | SetUserProfileType;

export default profileReducer;
