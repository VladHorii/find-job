import { IconButton, Input as MuiInput } from "@mui/material";
import { FC } from "react";
import styled, { css } from "styled-components";
import { InputProps, InputSize } from "../types";

export interface InputStyledProps {
  mysize: InputProps["size"];
}

export const Input: FC<InputProps> = ({ size, ...props }) => {
  const { icon, position, handleClickIcon } = props;

  if (icon) {
    if (position === "end") {
      return (
        <InputStyled
          mysize={size}
          {...props}
          startAdornment={
            <IconButton onClick={handleClickIcon}>{icon}</IconButton>
          }
        />
      );
    }

    return (
      <InputStyled
        mysize={size}
        {...props}
        endAdornment={<IconButton onClick={handleClickIcon}>{icon}</IconButton>}
      />
    );
  }

  return <InputStyled mysize={size} {...props} />;
};

const InputStyled = styled(MuiInput)<InputStyledProps>`
  &.MuiInputBase-root {
    width: fit-content;

    font-family: ${(props) => props.theme.typography.fontFamily};
    font-style: ${(props) => props.theme.typography.fontStyle};
    font-weight: ${(props) => props.theme.typography.fontWeight.small};
    font-size: 14px;
    line-height: 17px;
    text-align: start;
    color: ${(props) => props.theme.palette.common.black};

    padding: 5px 10px;

    border: 1px solid ${(props) => props.theme.palette.secondary.main};
    border-radius: 8px;

    ${(props) =>
      props.mysize === InputSize.Normal &&
      css`
        padding: 5px 10px;

        font-weight: ${(props) => props.theme.typography.fontWeight.normal};
        font-size: 16px;
        line-height: 19px;
      `}

    ${(props) =>
      props.mysize === InputSize.Large &&
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
  }

  & button {
    padding: 0;
  }

  &:before {
    border: none !important;
  }

  &:after {
    border: none !important;
  }
`;
