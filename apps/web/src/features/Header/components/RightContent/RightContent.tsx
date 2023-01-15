import { ArrowDown, Burger } from "@hs-job/icons";
import { IconButton } from "@hs-job/ui";
import React, { useState } from "react";
import styled from "styled-components";
import { MobileModal } from "../MobileModal";
import { User } from "../User";

export const RightContent = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <UserBar>
        <User />

        <IconButton>
          <ArrowDown />
        </IconButton>
      </UserBar>

      <BurgerStyled onClick={handleOpenModal} />
      <MobileModal isOpen={isOpenModal} onClose={handleCloseModal} />
    </>
  );
};

const UserBar = styled.div`
  display: none;

  @media ${(props) => props.theme.breakPoints.tablet} {
    display: flex;
    align-items: center;

    gap: 20px;
  }
`;

const BurgerStyled = styled(Burger)`
  @media ${(props) => props.theme.breakPoints.tablet} {
    display: none;
  }
`;
