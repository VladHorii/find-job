import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${(props) => props.theme.mediaQuery.container.maxWidth}px;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: ${(props) => props.theme.mediaQuery.desktop}px) {
    padding: 40px 20px;
  }
`;

const MyContainer = styled.div`
  background-color: ${(props) => props.theme.palette.common.white};
`;

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MyContainer>
      <ContentWrapper>{children}</ContentWrapper>
    </MyContainer>
  );
};
