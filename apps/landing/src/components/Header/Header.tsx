import { AuthButtons, Container, MobileModal } from "@/components";
import { Burger } from "@hs-job/icons";
import { IconButton, Logo } from "@hs-job/ui";
import { useState } from "react";
import styled from "styled-components";

const RightContent = styled.div`
  @media (max-width: ${(props) => props.theme.mediaQuery.mobile - 1}px) {
    & .buttons-wrapper {
      display: none;
    }
  }
  @media (min-width: ${(props) => props.theme.mediaQuery.mobile}px) {
    & .burger-icon {
      display: none;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Container>
      <Logo />

      <RightContent>
        <ButtonsWrapper className="buttons-wrapper">
          <AuthButtons variant={"outlined"} />
        </ButtonsWrapper>
        <IconButton className="burger-icon" onClick={handleOpenModal}>
          <Burger />
        </IconButton>
      </RightContent>

      <MobileModal isOpen={isOpenModal} onClose={handleCloseModal} />
    </Container>
  );
};
