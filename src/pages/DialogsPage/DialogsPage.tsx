import React, { FC, useState } from "react";
import styled from "styled-components";
import DialogItem from "../../components/DialogItem";
import Message from "../../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  DialogPageType,
  DialogType,
  MessageType,
  addMessageAC,
} from "../../store/reducers/dialogsReducer";
import TextArea from "../../shared/TextArea";
import { Button } from "../../shared/Button";

type DialogsPageProps = {};

export const DialogsPage: FC<DialogsPageProps> = (props) => {
  const dialogsState = useSelector<RootState, DialogPageType>(
    (state) => state.dialogsPage
  );
  const dispatch = useDispatch();

  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const addMessage = () => {
    const action = addMessageAC(textAreaValue);
    dispatch(action);
    setTextAreaValue("");
  };

  return (
    <DialogsPageWrapper>
      <DialogsListWrapper>
        <DialogsList>
          {dialogsState.dialogs.map((d: DialogType) => {
            return <DialogItem key={d.id} id={d.id} userName={d.userName} />;
          })}
        </DialogsList>
      </DialogsListWrapper>
      <MessengerWrapper>
        {dialogsState.messages.map((m: MessageType, index: number) => {
          return <Message key={index} messageText={m.text} />;
        })}
        <TextArea
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.currentTarget.value)}
        />
        <Button onClick={addMessage}>Add new Message</Button>
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
