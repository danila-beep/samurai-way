import React from "react";
import styled from "styled-components";
import DialogItem from "./DialogItem";
import Message from "./Message";

export const DialogsPage = () => {
  return (
    <DialogsPageWrapper>
      <DialogsListWrapper>
        <DialogsList>
            <DialogItem id={"1"} userName={"Danila"}/>
            <DialogItem id={"2"} userName={"Vasya"}/>
            <DialogItem id={"3"} userName={"Ivan"}/>
            <DialogItem id={"4"} userName={"Petya"}/>
        </DialogsList>
      </DialogsListWrapper>
      <MessengerWrapper>
        <Message messageText={"Hi"}/>
        <Message messageText={"How are you"}/>
        <Message messageText={"Greate"}/>
      </MessengerWrapper>
    </DialogsPageWrapper>
  );
};

const DialogsPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 5rem;
`;

const DialogsListWrapper = styled.div``;
const DialogsList = styled.div``;

const MessengerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
