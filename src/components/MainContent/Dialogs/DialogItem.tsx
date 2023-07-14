import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

type DialogItemProps = {
  id: string;
  userName: string;
};

const DialogItem: FC<DialogItemProps> = (props) => {
  const { id, userName } = props;

  return (
    <DialogItemStyled>
      <NavLink to={`/dialogs/${id}`}>{userName}</NavLink>
    </DialogItemStyled>
  );
};

export default DialogItem;

const DialogItemStyled = styled.div`
  & a.active {
    color: cyan;
  }
`;
