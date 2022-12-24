export enum ButtonSize {
  Normal = "normal",
  Large = "large",
}

export interface ButtonProps {
  variant?: "outlined" | "contained" | "text" | "link";
  size?: "small" | "normal" | "large";
  disabled?: boolean;
}
