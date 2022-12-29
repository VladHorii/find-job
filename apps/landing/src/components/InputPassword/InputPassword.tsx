import { Visibility, VisibilityOff } from "@hs-job/icons";
import { Input, InputProps } from "@hs-job/ui";
import React, { FC } from "react";

interface Props extends InputProps {
  passwordType: boolean;
}

export const InputPassword: FC<Props> = ({
  passwordType,
  handleClickIcon,
  ...props
}) => {
  return (
    <Input
      {...props}
      style={{ width: "100%" }}
      type={passwordType ? "text" : "password"}
      icon={passwordType ? <Visibility /> : <VisibilityOff />}
      handleClickIcon={handleClickIcon}
    />
  );
};
