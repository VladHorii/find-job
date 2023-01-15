import { Settings } from "@hs-job/icons";
import { Button, H4, Input } from "@hs-job/ui";
import React, { useState } from "react";
import styled from "styled-components";
import { MobileModal } from "../MobileModal";

export const SearchBar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Container>
      <H4>Пойдем искать работу</H4>
      <ContainerControls>
        <Input
          className={"input__mobile"}
          icon={<Settings />}
          placeholder={"Профессия"}
          handleClickIcon={handleOpenModal}
        />

        <Input
          className={"input__tabletDesktop"}
          icon={<Settings />}
          placeholder={"Пойдем искать работу Профессия, должность или компания"}
          handleClickIcon={handleOpenModal}
        />

        <Button
          className={"searchBar_Btn"}
          size={"large"}
          variant={"contained"}
        >
          Поиск
        </Button>
      </ContainerControls>

      <MobileModal isOpen={isOpenModal} onClose={handleCloseModal} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 20px;
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

      & button {
        display: none;
      }
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

  & .input__tabletDesktop {
    display: none;
  }

  @media ${(props) => props.theme.breakPoints.tablet} {
    & .input__mobile {
      display: none;
    }

    & .input__tabletDesktop {
      display: block;
    }
  }
`;
