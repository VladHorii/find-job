import { CheckboxProps as MuiCheckboxProps } from "@mui/material";

export type CheckBoxProps = Pick<MuiCheckboxProps, "disabled" | "checked">;
