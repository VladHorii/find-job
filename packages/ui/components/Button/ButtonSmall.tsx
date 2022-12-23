import { FC, PropsWithChildren } from "react";
import { ButtonBase } from "./ButtonBase";

export interface ButtonSmallProps {}

export const ButtonSmall: FC<PropsWithChildren<ButtonSmallProps>> = (props) => {
  return (
    <>
      <ButtonBase>{props.children}</ButtonBase>
    </>
  );
};
