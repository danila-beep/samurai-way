const usersState = {
  users: [
    {
      id: "1",
      userPhoto:
        "data:image/jpeg;base64,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",
      firstName: "Danila",
      lastName: "Nagov",
      isFollowed: false,
      status: "well",
      location: {
        country: "Russia",
        city: "Kirov",
      },
    },
    {
      id: "2",
      userPhoto:
        "data:image/jpeg;base64,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",
      firstName: "Danila",
      lastName: "Nagov",
      isFollowed: false,
      status: "well",
      location: {
        country: "Russia",
        city: "Kirov",
      },
    },
    {
      id: "3",
      userPhoto:
        "data:image/jpeg;base64,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",
      firstName: "Danila",
      lastName: "Nagov",
      isFollowed: false,
      status: "well",
      location: {
        country: "Russia",
        city: "Kirov",
      },
    },
  ],
};

export type UserPageType = {
  users: UserType[]
}

export type UserType = {
  id: string;
  userPhoto: string;
  firstName: string;
  lastName: string;
  isFollowed: boolean;
  status: string;
  location: {
    country: string;
    city: string;
  };
};

type ActionsType =
  | ReturnType<typeof followUserAC>
  | ReturnType<typeof unfollowUserAC>;

const usersReducer = (state = usersState, action: ActionsType) => {
  switch (action.type) {
    case "usersPage/followUser":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            console.log(user);
            
            return { ...user, isFollowed: true };
          }
          return {...user};
        }),
      };
    case "usersPage/unFollowUser":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, isFollowed: false };
          }
          return {...user};
        }),
      };
    default:
      return state;
  }
};

export const followUserAC = (userId: string) => {
  return { type: "usersPage/followUser", userId} as const;
};
export const unfollowUserAC = (userId: string) => {
  return { type: "usersPage/unFollowUser", userId} as const;
};

export default usersReducer;
