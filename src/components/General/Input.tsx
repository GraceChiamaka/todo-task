import React, { FC } from "react";
import styled from "styled-components";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e?: React.ChangeEvent) => void;
  name?: string;
  required?: boolean;
};

export const Input: FC<InputProps> = ({
  placeholder,
  type = "text",
  value = "",
  onChange,
  name = "",
  required = false,
}) => {
  return (
    <InputContainer>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        data-testid="custom-input"
        required={required}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: ${({ theme }) => theme.spacing?.custom(48)};
    padding: ${({ theme }) => theme.spacing?.double(12, 24)};
    outline: none;
    font-family: ${({ theme }) => theme.fontFamily?.regular};
    font-size: ${({ theme }) => theme.fontSize?.normal};
    &:focus {
      border: 1px solid #000;
    }
  }
`;

//  ${({theme}) => theme.};
