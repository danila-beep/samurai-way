import React from "react";
import "./App.css";
import styled from "styled-components";
import {SideBar} from "./components/SideBar";
import {Header} from "./components/Header";
import {MainContent} from "./components/MainContent/MainContent";

function App() {
    return (
        <AppWrapper>
            <Header/>
            <SideBar/>
            <MainContent/>
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
      display: grid;

      grid-template-rows: 60px 1fr;
      grid-template-columns: 2fr 10fr;
      grid-template-areas: 
      "h h h"
      "n c c";
      
      
    `;
