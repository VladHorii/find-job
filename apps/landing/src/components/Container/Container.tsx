import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  padding?: string;
  margin?: string;
}

export const Container: FC<Props> = ({ children, ...props }) => {
  return (
    <MyContainer {...props}>
      <ContentWrapper {...props}>{children}</ContentWrapper>
    </MyContainer>
  );
};

const MyContainer = styled.div<Props>`
  width: 100%;

  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.theme.palette.common.white};
`;

const ContentWrapper = styled.div<Props>`
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
