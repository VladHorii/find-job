export enum InputSize {
  Normal = "normal",
  Large = "large",
}

export interface InputProps {
  size?: "small" | "normal" | "large";
  placeholder?: string;
  disabled?: boolean;
}
