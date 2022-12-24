export enum ButtonVariants {
  OUTLINED = "outlined",
  CONTAINED = "contained",
  TEXT = "text",
  LINK = "link",
}

export enum ButtonSize {
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
}

export interface ButtonProps {
  variant: "outlined" | "contained" | "text" | "link";
  size?: "small" | "normal" | "large";
  disabled?: boolean;
}
