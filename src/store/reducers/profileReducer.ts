import { Dispatch } from "redux";
import { v1 } from "uuid";
import { socialMediaAPI } from "../../api/socialMediaAPI";

const profilePageState = {
  profile: {},
};

const profileReducer = (
  state: ProfilePageStateType = profilePageState,
  action: ActionsType
) => {
  switch (action.type) {
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

type SetUserProfileType = ReturnType<typeof setUserProfileAC>;
type SetUserStatusType = ReturnType<typeof setUserStatusAC>;

type ActionsType = SetUserProfileType | SetUserStatusType;

export default profileReducer;
