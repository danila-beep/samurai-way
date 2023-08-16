import React, { FC, useEffect } from "react";
import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Route, useParams } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import { DialogsPage } from "./pages/DialogsPage/DialogsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { Header } from "./components/Header/Header";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginRedirect from "./utils/hoc/LoginRedirect";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useDispatch } from "react-redux";
import { meTC } from "./store/reducers/authReducer";
import { useAppSelector } from "./utils/hooks/useAppSelector";
import { getLoggedUserDataTC } from "./store/reducers/appReducer";

type AppProps = {};

const App: FC<AppProps> = (props) => {
  const dispatch = useDispatch();
  const loggedUserId = useAppSelector((state) => state.auth.data.id);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  useEffect(() => {
    dispatch(meTC());
  }, [dispatch]);

  if (isAuthorized && loggedUserId) {
    dispatch(getLoggedUserDataTC(loggedUserId));
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path={"/"} render={() => <FeedPage />} />
        <Route path={"/feed"} render={() => <FeedPage />} />
        <Route
          path={"/profile/:userId"}
          render={() => (
            <LoginRedirect>
              <ProfilePage />
            </LoginRedirect>
          )}
        />
        <Route
          exact
          path={"/profile"}
          render={() => (
            <LoginRedirect>
              <ProfilePage />
            </LoginRedirect>
          )}
        />
        <Route
          path={"/dialogs"}
          render={() => (
            <LoginRedirect>
              <DialogsPage />
            </LoginRedirect>
          )}
        />
        <Route path={"/friends"} render={() => <UsersPage />} />
        <Route path={"/login"} render={() => <LoginPage />} />
        {/* <Route path={"/404"} render={() => <GlbalAppError />} /> */}
      </main>
    </div>
  );
};

export default App;
