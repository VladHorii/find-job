import { FC, PropsWithChildren } from "react";
import { ButtonBase } from "./ButtonBase";

export interface ButtonNormalProps {}

export const ButtonNormal: FC<PropsWithChildren<ButtonNormalProps>> = (
  props
) => {
  return (
    <>
      <ButtonBase>{props.children}</ButtonBase>
    </>
  );
};
