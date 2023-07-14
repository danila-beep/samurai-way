import React from 'react'
import styled from "styled-components";
import ProfilePage from "./Profile/ProfilePage";

export const MainContent = () => {
    return (
        <MainContentWrapper>
            <ProfilePage/>
        </MainContentWrapper>
    )
}
const MainContentWrapper = styled.div`
  grid-area: c;
  background: lightgrey;
  color: black;
  padding: 1rem;
  
`
