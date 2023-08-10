import React, { FC, useState } from "react";
import s from "./dialogPage.module.css";
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
    dispatch(addMessageAC(textAreaValue));
    setTextAreaValue("");
  };

  return <div className={s.dialogPageContainer}>
    Dialog Page
  </div>;
};
