import React, { FC, PropsWithChildren } from 'react';
import styled from "styled-components";

type TextAreaProps = {}

const TextArea: FC<PropsWithChildren<TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>> = (props) => {
    return <StyledTextArea {...props}/>
};

export default TextArea;

const StyledTextArea = styled.textarea`
  width: 60%;
  height: 7rem;
  resize: none;
  background: white;
  font-size: 1rem;
  padding: 1rem
`