import styled from "styled-components";

export const CreateTaskContainer = styled.form`
  display: flex;
  margin-bottom: 24px;
  gap: 12px;
  font-family: ${({ theme }) => theme.fontFamily?.avenirBlack};
  margin-bottom: ${({ theme }) => theme.spacing?.custom(80)};
  input {
    width: 100%;
    height: 56px;
    padding: 12px 24px;
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily?.regular};
    font-size: ${({ theme }) => theme.fontSize?.normal};
    &:focus {
      border: 1px solid #000;
    }
  }
  button {
    width: 200px;
    background: #000;
    color: #fff;
    font-family: ${({ theme }) => theme.fontFamily?.regular};
    border: none;
    cursor: pointer;
  }
`;
