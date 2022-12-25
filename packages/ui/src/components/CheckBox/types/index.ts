export enum CheckBoxSize {
  Normal = "normal",
  Large = "large",
}

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "small" | "normal" | "large";
}
