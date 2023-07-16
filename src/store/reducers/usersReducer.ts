const usersState = {
  users: {
    items: [],
    totalCount: 0,
    error: null
  },
};

export type UserPageType = {
  users: UsersListType
};

export type UsersListType = {
  items: UserType[];
  totalCount: number;
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
  | ReturnType<typeof setUsersAC>;

const usersReducer = (
  state: UserPageType = usersState,
  action: ActionsType
) => {
  switch (action.type) {
    case "usersPage/followUser":
      return {
        ...state,
        users: state.users.items.map((user) => {
          if (user.id === action.userId) {
            console.log(user);

            return { ...user, isFollowed: true };
          }
          return { ...user };
        }),
      };
    case "usersPage/unFollowUser":
      return {
        ...state,
        users: state.users.items.map((user: UserType) => {
          if (user.id === action.userId) {
            return { ...user, isFollowed: false };
          }
          return { ...user };
        }),
      };
    case "usersPage/setUsers":
      return {...state, users: action.users};
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

export default usersReducer;
