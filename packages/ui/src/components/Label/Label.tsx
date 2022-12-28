import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  justify?: string;
  align?: string;
  direction?: string;

  margin?: string;
  padding?: string;
  gap?: string;
}

export const Label: FC<Props> = ({ children, ...props }) => {
  return <MyLabel {...props}>{children}</MyLabel>;
};

const MyLabel = styled.label<Props>`
  display: flex;
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  flex-direction: ${(props) => props.direction || "column"};

  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  gap: ${(props) => props.gap || "0"};
`;
