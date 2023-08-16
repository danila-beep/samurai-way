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
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "profilePage/SetUserStatus": {
      return {
        ...state,
        profile: {
          ...state.profile,
          status: action.status,
        },
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
export const setUserStatusAC = (status: string) => {
  return { type: "profilePage/SetUserStatus", status } as const;
};

//thunk creators
export const setUserProfileTC =
  (userId: number) => async (dispatch: Dispatch) => {
    socialMediaAPI.getUserProfile(userId).then((res) => {
      dispatch(setUserProfileAC(res.data));
    });
  };
export const getUserStatusTC = (userId: number) => (dispatch: Dispatch) => {
  socialMediaAPI
    .getUserStatus(userId)
    .then((res) => {
      dispatch(setUserStatusAC(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

//types
type ProfilePageStateType = {
  profile: ProfileInfoType;
  posts: PostType[];
};

export type ProfileInfoType = {
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
  status?: string;
};

type PostType = {
  postId: string;
  postText: string;
};

type AddPostActionType = ReturnType<typeof addPostAC>;
type SetUserProfileType = ReturnType<typeof setUserProfileAC>;
type SetUserStatusType = ReturnType<typeof setUserStatusAC>;

type ActionsType = AddPostActionType | SetUserProfileType | SetUserStatusType;

export default profileReducer;
