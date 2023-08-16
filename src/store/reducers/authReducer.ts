import { Dispatch } from "redux";
import {
  LoginDataType,
  authApi,
  socialMediaAPI,
} from "../../api/socialMediaAPI";
import {
  SetLoggedUserDataActionType,
  getLoggedUserDataTC,
  setLoggedUserDataAC,
} from "./appReducer";

const initialState: authStateType = {
  isAuthorized: false,
  data: {},
};

export const authReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case "auth/me":
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data,
        },
        isAuthorized: true,
      };
    case "auth/login": {
      return {
        ...state,
        isAuthorized: action.isAuthorized,
      };
    }

    default:
      return state;
  }
};

export const meAC = (data: {
  userId: number;
  email: string;
  login: string;
}) => {
  return { type: "auth/me", data } as const;
};
export const loginAC = () => {
  return { type: "auth/login", isAuthorized: true } as const;
};

export const meTC = () => (dispatch: Dispatch<ActionsType>) => {
  authApi
    .me()
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(meAC(res.data.data));
      } else {
        console.log(res.data.messages);
      }
    })
    .catch((err) => {
      console.log((err as { message: string }).message);
    });
};

export const loginTC = (data: LoginDataType) => (dispatch: Dispatch) => {
  authApi
    .login(data)
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(loginAC());
      } else {
        console.log(res.data.messages);
      }
    })
    .catch((err) => {
      console.log((err as { message: string }).message);
    });
};

export type authStateType = {
  isAuthorized: boolean;
  data: {
    id?: number;
    email?: string;
    login?: string;
  };
};

type MeActionType = ReturnType<typeof meAC>;
type LoginActionType = ReturnType<typeof loginAC>;

type ActionsType = MeActionType | LoginActionType;
