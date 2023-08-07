import React, { FC } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import { DialogsPage } from "./pages/DialogsPage/DialogsPage";
import UsersPage from "./pages/UsersPage/UsersPage";

type AppProps = {};

const App: FC<AppProps> = (props) => {
  return (
    <div className="App">
      <Header />
      <main>
        <SideBar />
        <div className="Content">
          <Route path={"/profile"} render={() => <FeedPage />} />
          <Route path={"/dialogs"} render={() => <DialogsPage />} />
          <Route path={"/friends"} render={() => <UsersPage />} />
          {/* <Route path={"/news"} component={NewsPage} /> */}
          {/* <Route path={"/music"} component={MusicPage} /> */}
          {/* <Route path={"/settings"} component={SettingsPage} /> */}
        </div>
      </main>
    </div>
  );
};

export default App;
