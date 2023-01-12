import { Background, DynamicText } from "@/features";
import { App_Router } from "@hs-job/types";
import { Button, Container, H3, H4 } from "@hs-job/ui";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Banner = () => {
  return (
    <Container margin={"auto"}>
      <ContainerContent>
        <Background />

        <ContentWrapper>
          <MainText>Лучшее место для поиска работы</MainText>
          <H4>Давай продолжим вместе</H4>

          <DynamicText />

          <Link href={App_Router.Vacancy}>
            <Button size={"large"} variant={"contained"}>
              Перейти к вакансиям
            </Button>
          </Link>
        </ContentWrapper>
      </ContainerContent>
    </Container>
  );
};

const ContainerContent = styled.div`
  width: 100%;

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
