import { Background, DynamicText } from "@/features";
import { Button, H3, H4 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const MainText = styled(H3)`
  color: ${(props) => props.theme.palette.actions.hover};
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 35px 0;
  gap: 5px;

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    padding: 100px 0;
    gap: 15px;
  }
`;

export const Banner = () => {
  return (
    <Container>
      <Background />

      <ContentWrapper>
        <MainText>Лучшее место для поиска работы</MainText>
        <H4>Давай продолжим вместе</H4>

        <DynamicText />

        <Button size={"large"} variant={"contained"}>
          Перейти к вакансиям
        </Button>
      </ContentWrapper>
    </Container>
  );
};
