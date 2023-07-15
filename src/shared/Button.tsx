import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonProps = {};

export const Button: FC<
  PropsWithChildren<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>
> = (props) => {
  const { children } = props;
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  color: black
`;
