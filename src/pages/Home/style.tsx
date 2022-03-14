import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  padding: ${({ theme }) => theme.spacing?.double(48, 0)};
  margin: auto;
  height: calc(100vh - 100px);
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: ${({ theme }) => theme.fontSize?.custom(3)};
    margin-bottom: 8px;
  }
  p {
    font-family: ${({ theme }) => theme.fontFamily?.avernirRoman};
    width: 70%;
    font-size: ${({ theme }) => theme.fontSize?.custom(1.2)};
    margin-bottom: ${({ theme }) => theme.spacing?.normal};
  }
  ${({ theme }) => theme.media?.tablet} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing?.double(0, 16)};
    h3 {
      font-size: ${({ theme }) => theme.fontSize?.custom(2.5)};
    }
  }
  ${({ theme }) => theme.media?.mobile} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing?.double(0, 16)};
    h3 {
      font-size: ${({ theme }) => theme.fontSize?.custom(2.5)};
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  button {
    height: 48px;
    padding: ${({ theme }) => theme.spacing?.double(0, 48)};
    font-size: 18px;
    background: ${({ theme }) => theme.colors?.primary[300]};
    cursor: pointer;
    color: ${({ theme }) => theme.colors?.primary[200]};
    border-radius: ${({ theme }) => theme.borderRadius?.primary};
    border: none;
  }
  ${({ theme }) => theme.media?.tablet} {
    flex-direction: column;
    button {
      width: 100%;
      font-size: 16px;
    }
  }
  ${({ theme }) => theme.media?.mobile} {
    flex-direction: column;
    button {
      width: 100%;
      font-size: 16px;
    }
  }
`;

export const GetStartedBtn = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary[100]} !important;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary[200]} !important;
`;
