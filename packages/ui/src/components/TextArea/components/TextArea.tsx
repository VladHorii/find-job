import { TextField as MuiTextField } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { TextareaProp } from "../types";

export const Textarea: FC<TextareaProp> = (props) => {
  return <MyTextarea multiline {...props} />;
};

const MyTextarea = styled(MuiTextField)``;
