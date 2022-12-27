import { Button, H3, H4 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Container = styled.div`
  width: 100%;

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

const MainText = styled(H3)`
  color: ${(props) => props.theme.palette.actions.hover};
`;

const ContainerTypeWriter = styled.div`
  display: flex;
  flex-direction: row;

  & .Typewriter {
    display: flex;
    gap: 2px;
  }

  & .Typewriter__wrapper,
  & .Typewriter__cursor {
    line-height: 150%;
    font-size: 15px;
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-style: ${(props) => props.theme.typography.fontStyle};
    font-weight: ${(props) => props.theme.typography.fontWeight.normal};

    color: ${(props) => props.theme.palette.common.black};

    @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
      line-height: 150%;
      font-size: 18px;
    }

    @media (min-width: ${(props) => props.theme.mediaQuery.desktop}px) {
      line-height: 120%;
      font-size: 24px;
    }
  }
`;

export const Banner = () => {
  const currentTypeWriter = [
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    "Text 5",
    "Text 6",
  ];

  return (
    <Container>
      <MainText>Лучшее место для поиска работы</MainText>
      <H4>Давай продолжим вместе</H4>

      <ContainerTypeWriter>
        <H4>Lorem:&nbsp;</H4>

        <Typewriter
          options={{
            strings: currentTypeWriter,
            deleteSpeed: 200,
            autoStart: true,
            loop: true,
          }}
        />
      </ContainerTypeWriter>

      <Button size={"large"} variant={"contained"}>
        Перейти к вакансиям
      </Button>
    </Container>
  );
};
