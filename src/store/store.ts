import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import sideBarReducer from "./reducers/sideBarReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { appReducer } from "./reducers/appReducer";
import { feedReducer } from "./reducers/feedReducer";

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  sideBar: sideBarReducer,
  profilePage: profileReducer,
  feed: feedReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

//@ts-ignore
window.store = store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
