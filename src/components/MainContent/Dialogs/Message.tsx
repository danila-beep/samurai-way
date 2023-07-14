import React, { FC } from "react";
import styled from "styled-components";

type MessageProps = {
  messageText: string;
};

const Message: FC<MessageProps> = (props) => {
  const { messageText } = props;
  return <MessageStyled>{messageText}</MessageStyled>;
};

export default Message;

const MessageStyled = styled.div``;
