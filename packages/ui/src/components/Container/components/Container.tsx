import { FC } from "react";
import styled from "styled-components";
import { ContainerProps } from "../types";

export const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <MyContainer {...props}>
      <ContentWrapper {...props}>{children}</ContentWrapper>
    </MyContainer>
  );
};

const MyContainer = styled.div<ContainerProps>`
  width: 100%;

  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.theme.palette.common.white};
`;

const ContentWrapper = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  max-width: ${(props) => props.theme.mediaQuery.container.maxWidth}px;
  margin: 0 auto;
  padding: 15px;

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    padding: 15px;
  }

  @media (min-width: ${(props) => props.theme.mediaQuery.desktop}px) {
    padding: 20px;
  }
`;
