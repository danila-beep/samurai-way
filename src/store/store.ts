import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import sideBarReducer from "./reducers/sideBarReducer";
import dialogsReducer from "./reducers/dialogsReducer";

const reducers = combineReducers({
    sideBar: sideBarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

const store = createStore(reducers)

console.log(store.getState());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store