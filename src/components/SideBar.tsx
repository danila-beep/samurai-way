import React from 'react'
import styled from "styled-components";

export const SideBar = () => {


    return (
        <NavigationWrapper>
            <NavigationListContainer>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </NavigationListContainer>
        </NavigationWrapper>
    )
}

const NavigationWrapper = styled.nav`
  grid-area: n;
  background: darkcyan;
  color: black;
`
const NavigationListContainer = styled.ul`
  list-style: none;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  
  & li{
    transition: .3s;
  }
  & li:hover {
    color: red
  }
`
