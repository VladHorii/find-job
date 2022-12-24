import React, { FC, PropsWithChildren } from "react";
import { ButtonProps } from "../types";
import { ButtonContained } from "./ButtonContained";
import { ButtonLink } from "./ButtonLink";
import { ButtonOutlined } from "./ButtonOutlined";
import { ButtonText } from "./ButtonText";

export interface Props extends ButtonProps, PropsWithChildren {}

export const Button: FC<Props> = (props) => {
  switch (props.variant) {
    case "outlined":
      return <ButtonOutlined {...props} />;
    case "contained":
      return <ButtonContained {...props} />;
    case "text":
      return <ButtonText {...props} />;
    case "link":
      return <ButtonLink {...props} />;
    default:
      return <ButtonOutlined {...props} />;
  }
};
