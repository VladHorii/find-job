import { FC } from "react";
import styled, { css } from "styled-components";
import { InputProps, InputSize } from "../types";

export const Input: FC<InputProps> = ({ size, ...props }) => {
  return <MyInput inputSize={size} {...props} />;
};

interface MyInputProps {
  inputSize: InputProps["size"];
}

const MyInput = styled.input<MyInputProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.small};
  font-size: 14px;
  line-height: 17px;
  text-align: start;
  color: ${(props) => props.theme.palette.common.black};

  padding: 5px 10px;

  border: 1px solid ${(props) => props.theme.palette.secondary.active};
  border-radius: 8px;

  ${(props) =>
    props.inputSize === InputSize.Normal &&
    css`
      padding: 5px 10px;

      font-weight: ${(props) => props.theme.typography.fontWeight.normal};
      font-size: 16px;
      line-height: 19px;
    `}

  ${(props) =>
    props.inputSize === InputSize.Large &&
    css`
      padding: 5px 10px;

      font-weight: ${(props) => props.theme.typography.fontWeight.large};
      font-size: 18px;
      line-height: 22px;
    `}
    
  &:hover {
    border: 1px solid ${(props) => props.theme.palette.actions.hover};
  }

  &:disabled {
    color: ${(props) => props.theme.palette.actions.disabled};
    border: 1px solid ${(props) => props.theme.palette.actions.disabled};
  }
`;
