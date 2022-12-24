import React from "react";

export enum ButtonSize {
  Normal = "normal",
  Large = "large",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outlined" | "contained" | "text" | "link";
  size?: "small" | "normal" | "large";
}
