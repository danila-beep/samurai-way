import React, { FC } from "react";
import styled from "styled-components";
import DialogItem from "./DialogItem";
import Message from "./Message";

type DialogsPageProps = {
    dialogsData: {
        id: string,
        name: string 
    }[],
    messagesData: { 
        text: string
    }[]
}

export const DialogsPage: FC<DialogsPageProps> = (props) => {

    const {dialogsData, messagesData} = props
    
  return (
    <DialogsPageWrapper>
      <DialogsListWrapper>
        <DialogsList>
            {dialogsData.map(d => {
                return <DialogItem key={d.id} id={d.id} userName={d.name}/>
            })}
        </DialogsList>
      </DialogsListWrapper>
      <MessengerWrapper>
        {messagesData.map((m, index) => {
            return <Message key={index} messageText={m.text}/>
        })}
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
