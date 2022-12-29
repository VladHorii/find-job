import { P2 } from "@hs-job/ui";
import React, { FC } from "react";
import { ComponyDescriptionProps } from "../../types";

export const ComponyDescription: FC<ComponyDescriptionProps> = ({
  description,
}) => {
  return <P2>{description}</P2>;
};
