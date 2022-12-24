import React, { FC, PropsWithChildren } from "react";
import { ButtonContained } from "./ButtonContained";
import { ButtonLink } from "./ButtonLink";
import { ButtonOutlined } from "./ButtonOutlined";
import { ButtonText } from "./ButtonText";
import { ButtonProps, ButtonVariants } from "./types";

export interface Props extends ButtonProps, PropsWithChildren {}

export const Button: FC<Props> = (props) => {
  if (ButtonVariants.OUTLINED === props.variant) {
    return <ButtonOutlined {...props} />;
  }

  if (ButtonVariants.CONTAINED === props.variant) {
    return <ButtonContained {...props} />;
  }

  if (ButtonVariants.TEXT === props.variant) {
    return <ButtonText {...props} />;
  }

  if (ButtonVariants.LINK === props.variant) {
    return <ButtonLink {...props} />;
  }

  return <></>;
};
