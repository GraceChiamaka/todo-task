import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: ${({ theme }) => theme.spacing?.double(8, 16)};
  border-bottom: ${({ theme }) => theme.border?.card};
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing?.custom(8)};
  &:before {
    content: "";
    top: 0;
    height: 100%;
    border-left: 4px solid #000;
    position: absolute;
    left: 0;
  }

  ${({ theme }) => theme.media?.tablet} {
    p {
      text-align: left;
      width: 100%;
      margin-bottom: ${({ theme }) => theme.spacing?.custom(16)};
    }
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    &:before {
      display: none;
    }
  }
  ${({ theme }) => theme.media?.mobile} {
    p {
      text-align: left;
      width: 100%;
      margin-bottom: ${({ theme }) => theme.spacing?.custom(16)};
    }
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    &:before {
      display: none;
    }
  } ;
`;
export const ActionContainer = styled.div`
  width: 45%;
  gap: 24px;
  display: flex;
  justify-content: flex-end;
  button {
    background: #000;
    color: #fff;
    padding: ${({ theme }) => theme.spacing?.double(10, 24)};
    border: none;
    height: ${({ theme }) => theme.spacing?.custom(40)};
    cursor: pointer;
  }
  ${({ theme }) => theme.media?.tablet} {
    width: 100%;
    button {
      width: 100%;
      padding: ${({ theme }) => theme.spacing?.double(10, 16)};
      font-size: ${({ theme }) => theme.fontSize?.custom(0.7)};
    }
  }
  ${({ theme }) => theme.media?.mobile} {
    width: 100%;
    button {
      width: 100%;
      padding: ${({ theme }) => theme.spacing?.double(10, 16)};
      font-size: ${({ theme }) => theme.fontSize?.custom(0.7)};
    }
  } ;
`;
