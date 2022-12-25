import { CheckboxProps as MuiCheckboxProps } from "@mui/material";

export type CheckboxProps = Pick<MuiCheckboxProps, "disabled" | "checked">;
