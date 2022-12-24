import React from "react";

export enum InputSize {
  Normal = "normal",
  Large = "large",
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "small" | "normal" | "large";
}
