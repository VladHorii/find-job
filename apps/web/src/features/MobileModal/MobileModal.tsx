import { Cross } from "@hs-job/icons";
import { IconButton, Modal } from "@hs-job/ui";
import React, { FC } from "react";
import styled from "styled-components";
import { Filter } from "../Filter";

interface Props {
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

        <Filter />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 100vw;
  height: fit-content;

  margin: 15vh 0;
  padding: 25px;

  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.common.white};
`;

const ContainerCross = styled.div`
  display: flex;
  justify-content: end;
`;
