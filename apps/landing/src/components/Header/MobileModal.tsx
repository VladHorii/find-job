import { AuthButtons } from "@/components";
import { Cross } from "@hs-job/icons";
import { IconButton, Modal } from "@hs-job/ui";
import React, { FC } from "react";
import styled from "styled-components";

export interface MobileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Content = styled.div`
  background-color: ${(props) => props.theme.palette.common.white};
  width: 100vw;
  height: 70vh;
  margin: 15vh 0;
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CrossWrapper = styled(IconButton)`
  margin-left: auto;
  padding: 4px;
  width: max-content;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin: auto 0;
`;

export const MobileModal: FC<MobileModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} component={"div"} onClose={onClose}>
      <Content>
        <CrossWrapper onClick={onClose}>
          <Cross />
        </CrossWrapper>
        <ButtonWrapper>
          <AuthButtons variant={"text"} />
        </ButtonWrapper>
      </Content>
    </Modal>
  );
};
