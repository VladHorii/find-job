import React, { FC } from "react";
import styled, { css } from "styled-components";
import { ButtonProps, ButtonSize } from "../types";

export const ButtonText: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

const Button = styled.button<ButtonProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.small};
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${(props) => props.theme.palette.common.black};

  padding: 5px 10px;

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

  &:hover, &:focus {
    background-color: ${(props) => props.theme.palette.actions.disabled};
  }

  &:disabled {
    color: ${(props) => props.theme.palette.actions.disabled};
  }
`;
