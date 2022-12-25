import React, { FC } from "react";
import styled, { css } from "styled-components";
import { CheckBoxProps, CheckBoxSize } from "../types";

export const CheckBox: FC<CheckBoxProps> = ({ size, ...props }) => {
  return <MyCheckBox type="checkbox" checkBoxSize={size} {...props} />;
};

interface MyCheckBoxProps {
  checkBoxSize: CheckBoxProps["size"];
}

const MyCheckBox = styled.input<MyCheckBoxProps>`
  ${(props) => props.checkBoxSize === CheckBoxSize.Normal && css``}

  ${(props) => props.checkBoxSize === CheckBoxSize.Large && css``}

  &:hover {
  }

  &:disabled {
  }
`;
