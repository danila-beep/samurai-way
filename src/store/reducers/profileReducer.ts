import { v1 } from "uuid"

const profilePageState = {
    posts: [
        {postId: "1", postText: "My first post"},
        {postId: "2", postText: "My second post"},
        {postId: "3", postText: "My third post"},
    ]
}
type PostType = {
    postId: string,
    postText: string
}

type AddPostActionType = ReturnType<typeof addPostAC>

type ActionsType = AddPostActionType

const profileReducer = (state = profilePageState, action: ActionsType) => {
  switch (action.type) {
    case "profilePage/AddPost":
      const newState = {...state};
      newState.posts.unshift(action.newPost)
      return newState
    default:
      return state;
  }
};

export const addPostAC = (postText: string) => {
    return {type: "profilePage/AddPost", newPost: {postId: v1(), postText}} as const
}

export default profileReducer;
