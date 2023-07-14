import React from 'react';
import styled from "styled-components";

const NewPostTextArea = () => {
    return (
        <StyledTextArea placeholder={"Enter your post"}/>
    );
};

export default NewPostTextArea;

const StyledTextArea = styled.textarea`
  width: 60%;
  height: 7rem;
  resize: none;
  background: white;
  font-size: 1rem;
  padding: 1rem
`