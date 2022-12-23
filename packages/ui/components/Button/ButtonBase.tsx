import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const MyButton = styled.button`
  padding: 100px;
  cursor: pointer;
`;

export interface ButtonBaseProps {}

export const ButtonBase: FC<PropsWithChildren<ButtonBaseProps>> = ({
  children,
}) => {
  return <MyButton>{children}</MyButton>;
};
