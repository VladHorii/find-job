import { Cross } from "@hs-job/icons";
import { Button, IconButton, Modal } from "@hs-job/ui";
import React, { FC } from "react";
import styled from "styled-components";
import { User } from "../User";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Container>
        <ContainerCross>
          <IconButton onClick={onClose}>
            <Cross />
          </IconButton>
        </ContainerCross>

        <NavBar>
          <Button variant={"link"}>Proposals</Button>
          <Button variant={"link"}>Vacancies</Button>
          <Button variant={"link"}>Edit profile</Button>
          <Button variant={"link"}>Log out</Button>
        </NavBar>

        <ContainerUser>
          <User isModal={true} />
        </ContainerUser>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 50vh;

  margin: 15vh 0;
  padding: 25px;

  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.common.white};
`;

const ContainerCross = styled.div`
  display: flex;
  justify-content: end;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 5px;
  gap: 40px;
`;

const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
  gap: 20px;
`;
