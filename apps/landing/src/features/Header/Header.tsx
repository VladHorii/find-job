import { AuthButtons, MobileModal } from "@/features";
import { Burger } from "@hs-job/icons";
import { App_Router } from "@hs-job/types";
import { Container, IconButton, Logo } from "@hs-job/ui";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Wrapper>
      <Container>
        <Link href={App_Router.Main}>
          <Logo />
        </Link>

        <RightContent>
          <ButtonsWrapper className="buttons-wrapper">
            <AuthButtons variant={"outlined"} size={"normal"} />
          </ButtonsWrapper>
          <IconButton className="burger-icon" onClick={handleOpenModal}>
            <Burger />
          </IconButton>
        </RightContent>

        <MobileModal isOpen={isOpenModal} onClose={handleCloseModal} />
      </Container>
    </Wrapper>
  );
};

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

const Wrapper = styled.header`
  margin-bottom: 10px;
  box-shadow: 0 1px 5px ${(props) => props.theme.palette.secondary.light};
`;
