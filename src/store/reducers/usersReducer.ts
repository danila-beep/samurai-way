export type UserPageType = {
  users: UsersListType;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
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
  | ReturnType<typeof currentPageChengerAC>
  | ReturnType<typeof setTotalUsersCount>;

const usersState = {
  users: {
    items: [],
    totalUsersCount: 0,
    error: null,
  },
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

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
      return { ...state, users: action.users };
    case "usersPage/changeCurrentPage":
      return { ...state, currentPage: action.value };
    case "usersPage/setTotalUsersCount":
      return { ...state, totalUsersCount: action.value };
    default:
      return state;
  }
};

export const followUserAC = (userId: number) => {
  return { type: "usersPage/followUser", userId } as const;
};
export const unfollowUserAC = (userId: number) => {
  return { type: "usersPage/unFollowUser", userId } as const;
};
export const setUsersAC = (users: UsersListType) => {
  return { type: "usersPage/setUsers", users } as const;
};
export const currentPageChengerAC = (value: number) => {
  return { type: "usersPage/changeCurrentPage", value } as const;
};
export const setTotalUsersCount = (value: number) => {
  return { type: "usersPage/setTotalUsersCount", value } as const;
};

export default usersReducer;
