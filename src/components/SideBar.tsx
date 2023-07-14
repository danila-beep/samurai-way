import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type SideBarProps = {
  navigationItemsData: {
    link: string;
    title: string;
  }[];
};

export const SideBar: FC<SideBarProps> = (props) => {
  const { navigationItemsData } = props;

  const navigationItemsForRender = navigationItemsData.map((navI) => {
    return (
      <NavigationItem>
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
