import { FC, PropsWithChildren } from "react";
import { ButtonBase } from "./ButtonBase";

export interface ButtonLargeProps {}

export const ButtonLarge: FC<PropsWithChildren<ButtonLargeProps>> = (props) => {
  return (
    <>
      <ButtonBase>{props.children}</ButtonBase>
    </>
  );
};
