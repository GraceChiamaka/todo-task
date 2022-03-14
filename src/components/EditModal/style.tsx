import styled from "styled-components";

export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 50%;
  height: auto;
  background: ${({ theme }) => theme.colors?.white};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
  padding: ${({ theme }) => theme.spacing?.custom(24)};
  h3 {
    padding-bottom: ${({ theme }) => theme.spacing?.custom(16)};
    border-bottom: ${({ theme }) =>
      theme.border?.custom("1px", theme.colors?.primary[200])};
    margin-bottom: ${({ theme }) => theme.spacing?.custom(24)};
  }
  ${({ theme }) => theme.media?.mobile} {
    width: 95%;
  }
`;
export const FormItem = styled.div`
  margin-bottom: 16px;
`;

export const FormBtnContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  width: 50%;
  margin-left: auto;
  button {
    background: #000;
    color: ${({ theme }) => theme.colors.white};
    height: 40px;
    width: 50%;
    border: none;
    cursor: pointer;
  }
  .cancel-btn {
    background: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.white};
  }
`;
