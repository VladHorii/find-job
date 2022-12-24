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
  color: ${(props) => props.theme.palette.actions.active};

  padding: 5px 10px;

  border-radius: 8px;

  ${(props) =>
    props.size === ButtonSize.NORMAL &&
    css`
      padding: 5px 10px;

      font-weight: ${(props) => props.theme.typography.fontWeight.normal};
      font-size: 16px;
      line-height: 19px;
    `}

  ${(props) =>
    props.size === ButtonSize.LARGE &&
    css`
      font-weight: ${(props) => props.theme.typography.fontWeight.large};
      font-size: 18px;
      line-height: 22px;
    `}

  &:hover {
    text-decoration-line: underline;
    color: ${(props) => props.theme.palette.actions.hover};
  }

  &:disabled {
    color: ${(props) => props.theme.palette.actions.disabled};
  }
`;

export const ButtonLink: FC<Props> = (props) => {
  return <Button {...props} />;
};
