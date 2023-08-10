import React, { FC } from "react";
import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import { DialogsPage } from "./pages/DialogsPage/DialogsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { Header } from "./components/Header/Header";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

type AppProps = {};

const App: FC<AppProps> = (props) => {
  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path={"/"} render={() => <FeedPage />} />
        <Route path={"/feed"} render={() => <FeedPage />} />
        <Route path={"/profile/:userId"} render={() => <ProfilePage />} />
        <Route path={"/dialogs"} render={() => <DialogsPage />} />
        <Route path={"/friends"} render={() => <UsersPage />} />

        {/* <div className="SideBarWrapper">
          <SideBar />
        </div>
        <div className="ContentWrapper">
          <Route exact path={"/"} render={() => <FeedPage />} />
          <Route path={"/feed"} render={() => <FeedPage />} />
          <Route path={"/profile/:userId"} render={() => <ProfilePage />} />
          <Route path={"/dialogs"} render={() => <DialogsPage />} />
          <Route path={"/friends"} render={() => <UsersPage />} />
        </div> */}
      </main>
    </div>
  );
};

export default App;
