import { Avatar as MuiAvatar } from "@mui/material";
import styled from "styled-components";

export const Avatar = styled(MuiAvatar)`
  &.MuiAvatar-root {
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.palette.success.light};
  }
`;
