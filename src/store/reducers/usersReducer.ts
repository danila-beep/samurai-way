import { Dispatch } from "redux";
import { socialMediaAPI } from "../../api/socialMediaAPI";

//initial State
const usersState = {
  users: {
    items: [],
    totalUsersCount: 0,
    error: null,
  },
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  paginationCount: [1, 2, 3, 4, 5],
  isFetching: true,
};

//Reducer
const usersReducer = (
  state: UserPageType = usersState,
  action: ActionsType
) => {
  switch (action.type) {
    case "usersPage/followUser":
      return {
        ...state,
        users: {
          ...state.users,
          items: [
            ...state.users.items.map((user) => {
              if (user.id === action.userId) {
                return { ...user, followed: true };
              } else {
                return { ...user };
              }
            }),
          ],
        },
      };
    case "usersPage/unFollowUser":
      return {
        ...state,
        users: {
          ...state.users,
          items: [
            ...state.users.items.map((user) => {
              if (user.id === action.userId) {
                return { ...user, followed: false };
              } else {
                return { ...user };
              }
            }),
          ],
        },
      };
    case "usersPage/setUsers":
      return { ...state, users: action.users, isFetching: false };
    case "usersPage/changeCurrentPage":
      return { ...state, currentPage: action.value };
    case "usersPage/setTotalUsersCount":
      return { ...state, totalUsersCount: action.value };
    case "usersPage/nextPagesPagination": {
      const nextPagesArray: Array<number> = [...state.paginationCount];
      if (nextPagesArray[4] >= action.pagesCount) {
        return {
          ...state,
          paginationCount: nextPagesArray,
        };
      } else {
        nextPagesArray.push(nextPagesArray[4] + 1);
        nextPagesArray.shift();
        return {
          ...state,
          paginationCount: nextPagesArray,
        };
      }
    }
    case "usersPage/previousPagesPagination": {
      const previousPagesArray: Array<number> = [...state.paginationCount];
      if (previousPagesArray[0] <= 1) {
        return {
          ...state,
          paginationCount: previousPagesArray,
        };
      } else {
        previousPagesArray.pop();
        previousPagesArray.unshift(previousPagesArray[0] - 1);
        return {
          ...state,
          paginationCount: previousPagesArray,
        };
      }
    }
    default:
      return state;
  }
};

//Action Creators
export const followUserAC = (userId: number) => {
  return { type: "usersPage/followUser", userId } as const;
};
export const unfollowUserAC = (userId: number) => {
  return { type: "usersPage/unFollowUser", userId } as const;
};
export const setUsersAC = (users: UsersListType) => {
  return { type: "usersPage/setUsers", users } as const;
};
export const currentPageChangerAC = (value: number) => {
  return { type: "usersPage/changeCurrentPage", value } as const;
};
export const setTotalUsersCount = (value: number) => {
  return { type: "usersPage/setTotalUsersCount", value } as const;
};
export const nextPagesPaginationAC = (pagesCount: number) => {
  return { type: "usersPage/nextPagesPagination", pagesCount } as const;
};
export const previousPagesPaginationAC = (pagesCount: number) => {
  return { type: "usersPage/previousPagesPagination", pagesCount } as const;
};

//Thunk Creators
export const getUsersTC =
  (currentPage?: number, pageSize?: number) => async (dispatch: Dispatch) => {
    if (currentPage && pageSize) {
      socialMediaAPI
        .getUsers(currentPage, pageSize)
        .then((res) => {
          const data = res.data;
          dispatch(setUsersAC(data));
          dispatch(setTotalUsersCount(data.totalCount));
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      socialMediaAPI.getUsers().then((res) => {
        dispatch(setUsersAC(res.data));
        dispatch(setTotalUsersCount(res.data.totalCount));
      });
    }
  };
export const followUserTC = (userId: number) => async (dispatch: Dispatch) => {
  socialMediaAPI.followUser(userId).then((res) => {
    dispatch(followUserAC(userId));
  });
};
export const unfollowUserTC =
  (userId: number) => async (dispatch: Dispatch) => {
    socialMediaAPI.unfollowUser(userId).then((res) => {
      dispatch(unfollowUserAC(userId));
    });
  };

export type UserPageType = {
  users: UsersListType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  paginationCount: number[];
  isFetching: boolean;
};

export type UsersListType = {
  items: UserType[];
  totalUsersCount: number;
  error: string | null;
};

export type UserType = {
  name: string;
  id: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

type ActionsType =
  | ReturnType<typeof followUserAC>
  | ReturnType<typeof unfollowUserAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof currentPageChangerAC>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof nextPagesPaginationAC>
  | ReturnType<typeof previousPagesPaginationAC>;

export default usersReducer;
