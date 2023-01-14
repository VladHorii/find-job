import { Avatar, P4 } from "@hs-job/ui";
import React, { FC } from "react";
import styled, { css } from "styled-components";

interface Props {
  isModal?: boolean;
}

export const User: FC<Props> = ({ isModal }) => {
  const user = {
    name: "Vladislav Samoilenko",
    email: "vlad.samoilenko.it@gmail.com",
  };

  return (
    <>
      <Avatar />

      <Information isModal={isModal}>
        <P4>{user.name}</P4>
        <P4>{user.email}</P4>
      </Information>
    </>
  );
};

const Information = styled.div<Props>`
  display: none;

  @media ${(props) => props.theme.breakPoints.desktop} {
    display: block;
  }

  ${(props) =>
    props.isModal &&
    css`
      display: block;
    `}
`;
