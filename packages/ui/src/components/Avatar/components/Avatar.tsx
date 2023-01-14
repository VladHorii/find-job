import { Avatar as MuiAvatar } from "@mui/material";
import styled, { css } from "styled-components";
import { AvatarProps } from "../types";

export const Avatar = styled(MuiAvatar)<AvatarProps>`
  &.MuiAvatar-root {
    width: 50px;
    height: 50px;

    background-color: ${(props) => props.theme.palette.warning.light};

    ${(props) =>
      props.size === "normal" &&
      css`
        width: 150px;
        height: 150px;
      `}

    ${(props) =>
      props.size === "large" &&
      css`
        width: 200px;
        height: 200px;
      `}

    ${(props) =>
      props.variant === "hr" &&
      css`
        background-color: ${(props) => props.theme.palette.success.light};
      `}
  }
`;
