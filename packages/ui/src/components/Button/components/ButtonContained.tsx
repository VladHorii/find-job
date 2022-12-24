import React, { FC } from "react";
import styled, { css } from "styled-components";
import { ButtonProps, ButtonSize } from "../types";

export const ButtonContained: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

const Button = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.small};
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${(props) => props.theme.palette.common.white};

  padding: 5px 10px;

  background-color: ${(props) => props.theme.palette.actions.active};
  border-radius: 8px;

  ${(props) =>
    props.size === ButtonSize.Normal &&
    css`
      padding: 7px 13px;

      font-weight: ${(props) => props.theme.typography.fontWeight.normal};
      font-size: 16px;
      line-height: 19px;
    `}
  ${(props) =>
    props.size === ButtonSize.Large &&
    css`
      padding: 8px 15px;

      font-weight: ${(props) => props.theme.typography.fontWeight.large};
      font-size: 18px;
      line-height: 22px;
    `}
  &:hover {
    background-color: ${(props) => props.theme.palette.actions.hover};
  }

  &:disabled {
    background-color: ${(props) => props.theme.palette.actions.disabled};
  }
`;
