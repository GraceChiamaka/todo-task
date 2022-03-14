import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: auto;
  padding: ${({ theme }) => theme.spacing?.double(40, 0)};

  ${({ theme }) => theme.media?.tablet} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing?.double(40, 24)};
  }
  ${({ theme }) => theme.media?.mobile} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing?.double(40, 24)};
  } ;
`;
export const TaskContainer = styled.div`
  width: 100%;
  margin: auto;
`;

// ${({theme}) =>theme.};
