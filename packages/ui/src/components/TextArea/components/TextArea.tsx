import { TextField as MuiTextField } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";
import { TextAreaProp } from "../types";

export const TextArea: FC<TextAreaProp> = (props) => {
  return <MyTextArea multiline {...props} />;
};

const MyTextArea = styled(MuiTextField)``;
