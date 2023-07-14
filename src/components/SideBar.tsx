import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = () => {
  return (
    <NavigationWrapper>
      <NavigationListContainer>
        <NavigationItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to="/dialogs">Dialogs</NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to="/news">News</NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to="/music">Music</NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to="/settings">Settings</NavLink>
        </NavigationItem>
      </NavigationListContainer>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  grid-area: n;
  background: darkcyan;
  color: black;
`;
const NavigationListContainer = styled.ul`
  list-style: none;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;


`;
const NavigationItem = styled.li`
  transition: 0.3s;

  & a.active {
    color: cyan
  }
  & a:hover {
    color: red;
  }
`;
