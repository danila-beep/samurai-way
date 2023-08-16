import { Dispatch } from "redux";
import { ProfileInfoType } from "./profileReducer";
import { socialMediaAPI } from "../../api/socialMediaAPI";

const initialState: ProfileInfoType = {};

export const appReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "appData/setLoggedUserInfo":
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setLoggedUserDataAC = (data: ProfileInfoType) => {
  return { type: "appData/setLoggedUserInfo", data } as const;
};

export const getLoggedUserDataTC = (userId: number) => (dispatch: Dispatch) => {
    
  socialMediaAPI.getUserProfile(userId).then((res) => {
    dispatch(setLoggedUserDataAC(res.data));
  });
};

export type SetLoggedUserDataActionType = ReturnType<
  typeof setLoggedUserDataAC
>;

type ActionType = SetLoggedUserDataActionType;
