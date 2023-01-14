import { AvatarProps as MuiAvatarProps } from "@mui/material";

export interface AvatarProps extends Omit<MuiAvatarProps, "variant"> {
  size?: "small" | "normal" | "large";
  variant?: "hr" | "user";
}
