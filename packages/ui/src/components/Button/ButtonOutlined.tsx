import React, { FC } from "react";
import styled, { css } from "styled-components";
import { ButtonProps, ButtonSize } from "./types";

interface Props extends ButtonProps {}

const Button = styled.button<Props>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.small};
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${(props) => props.theme.palette.common.black};

  padding: 5px 10px;

  border: 1px solid ${(props) => props.theme.palette.actions.disabled};
  border-radius: 8px;

  ${(props) =>
    props.size === ButtonSize.NORMAL &&
    css`
      font-size: 16px;
      line-height: 19px;
      font-weight: ${(props) => props.theme.typography.fontWeight.normal};

      padding: 7px 13px;
    `}

  ${(props) =>
    props.size === ButtonSize.LARGE &&
    css`
      font-size: 18px;
      line-height: 22px;
      font-weight: ${(props) => props.theme.typography.fontWeight.large};

      padding: 8px 15px;
    `}

  &:hover {
    border: 1px solid ${(props) => props.theme.palette.actions.hover};
  }

  &:disabled {
    color: ${(props) => props.theme.palette.actions.disabled};
    border: 1px solid ${(props) => props.theme.palette.actions.disabled};
  }
`;

export const ButtonOutlined: FC<Props> = (props) => {
  return <Button {...props} />;
};
