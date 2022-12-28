import { InputProps as MuiInputProps } from "@mui/material";

export enum InputSize {
  Normal = "normal",
  Large = "large",
}

export interface InputIcon {
  icon?: React.ReactNode;
  position?: "start" | "end";
  handleClickIcon?: () => void;
}

export interface InputProps extends Omit<MuiInputProps, "size">, InputIcon {
  size?: "small" | "normal" | "large";
}
