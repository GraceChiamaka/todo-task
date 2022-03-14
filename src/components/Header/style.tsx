import styled from "styled-components";

export const Container = styled.header`
  width: 70%;
  margin: auto;
  padding: 40px 0;
  h2 {
    font-family: ${({ theme }) => theme.fontFamily?.avenirBlack};
    font-size: ${({ theme }) => theme.fontSize?.hero};
  }
  p {
    color: ${({ theme }) => theme.colors?.primary[300]};
  }
  ${({ theme }) => theme.media?.tablet} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing?.double(40, 24)};
  }
  ${({ theme }) => theme.media?.mobile} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing?.double(40, 24)};
  }
`;

// ${({theme}) => theme.};
