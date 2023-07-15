import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../store/store";

type SideBarProps = {};

export const SideBar: FC<SideBarProps> = (props) => {
  const sideBarData = useSelector((state: RootState) => state.sideBar);

  const navigationItemsForRender = sideBarData.map((navI) => {
    return (
      <NavigationItem key={navI.link}>
        <NavLink to={`/${navI.link}`}>{navI.title}</NavLink>
      </NavigationItem>
    );
  });
  return (
    <NavigationWrapper>
      <NavigationListContainer>
        {navigationItemsForRender}
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
    color: cyan;
  }
  & a:hover {
    color: red;
  }
`;
