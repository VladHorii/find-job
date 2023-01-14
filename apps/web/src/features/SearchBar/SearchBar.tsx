import { Settings } from "@hs-job/icons";
import { Button, H4, Input } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const SearchBar = () => {
  return (
    <Container>
      <H4>Пойдем искать работу</H4>
      <ContainerControls>
        <Input icon={<Settings />} placeholder={"text"} />

        <Button
          className={"searchBar_Btn"}
          size={"large"}
          variant={"contained"}
        >
          Поиск
        </Button>
      </ContainerControls>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 10px;
  gap: 10px;

  @media ${(props) => props.theme.breakPoints.tablet} {
    gap: 15px;
  }

  @media ${(props) => props.theme.breakPoints.desktop} {
    margin-bottom: 35px;
  }
`;

const ContainerControls = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  & .MuiInputBase-root {
    width: 100%;

    @media ${(props) => props.theme.breakPoints.tablet} {
      width: 600px;
      border-radius: 8px 0 0 8px;
    }
  }

  & .searchBar_Btn {
    width: 150px;
    display: none;

    @media ${(props) => props.theme.breakPoints.tablet} {
      display: block;
      border-radius: 0 8px 8px 0;
    }
  }
`;
