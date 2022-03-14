import { FC } from "react";
import styled from "styled-components";

type AlertProps = {
  type: "error" | "success";
  msg: string;
  close?: () => void;
};

export const Alert: FC<AlertProps> = ({ type, msg, close }) => {
  return (
    <Container type={type}>
      <p>{msg}</p>
      <Close onClick={close}>X</Close>
    </Container>
  );
};

const Container = styled.div<{ type: "error" | "success" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme, type }) =>
    type === "error"
      ? theme.colors?.secondary[300]
      : theme.colors?.secondary[400]};
  color: white;
  padding: ${({ theme }) => theme.spacing?.double(8, 16)};
  margin-bottom: ${({ theme }) => theme.spacing?.normal};
  border-radius: ${({ theme }) => theme.borderRadius?.primary};
`;

const Close = styled.button`
  width: ${({ theme }) => theme.spacing?.custom(24)};
  height: ${({ theme }) => theme.spacing?.custom(24)};
  border: none;
  border: 1px solid #fff;
  background: transparent;
  color: white;
  cursor: pointer;
`;
