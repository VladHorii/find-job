export enum InputSize {
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
}

export interface InputProps {
  size?: "small" | "normal" | "large";
  placeholder?: string;
  disabled?: boolean;
}
