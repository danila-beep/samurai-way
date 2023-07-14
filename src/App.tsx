import React, { FC } from "react";
import "./App.css";
import styled from "styled-components";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import ProfilePage from "./components/MainContent/Profile/ProfilePage";
import { DialogsPage } from "./components/MainContent/Dialogs/DialogsPage";
import { Route } from "react-router-dom";

type AppProps = {
  navigationItemsData: {
    link: string;
    title: string;
  }[];
  postsData: {
    text: string;
  }[];
  dialogsData: {
    id: string;
    name: string;
  }[];
  messagesData: {
    text: string;
  }[];
};

const App: FC<AppProps> = (props) => {
  const { navigationItemsData, postsData, dialogsData, messagesData } = props;

  return (
    <AppWrapper>
      <Header />
      <SideBar navigationItemsData={navigationItemsData} />
      <MainContentWrapper>
        <Route
          path={"/profile"}
          render={() => <ProfilePage postsData={postsData} />}
        />
        <Route
          path={"/dialogs"}
          render={() => (
            <DialogsPage
              dialogsData={dialogsData}
              messagesData={messagesData}
            />
          )}
        />
        {/* <Route path={"/news"} component={NewsPage} /> */}
        {/* <Route path={"/music"} component={MusicPage} /> */}
        {/* <Route path={"/settings"} component={SettingsPage} /> */}
      </MainContentWrapper>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  display: grid;

  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-template-areas:
    "h h h"
    "n c c";
`;
const MainContentWrapper = styled.div`
  grid-area: c;
  background: lightgrey;
  color: black;
  padding: 1rem;
`;
