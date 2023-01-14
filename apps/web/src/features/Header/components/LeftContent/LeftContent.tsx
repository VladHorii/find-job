import { App_Router } from "@hs-job/types";
import { Button, Logo } from "@hs-job/ui";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const LeftContent = () => {
  return (
    <Container>
      <Link href={App_Router.Main}>
        <Logo />
      </Link>

      <NavBar>
        <Link href={App_Router.Main}>
          <Button variant={"link"}>Proposals</Button>
        </Link>

        <Link href={App_Router.Main}>
          <Button variant={"link"}>Vacancies</Button>
        </Link>
      </NavBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  gap: 50px;
`;

const NavBar = styled.nav`
  display: none;

  @media ${(props) => props.theme.breakPoints.tablet} {
    display: block;
  }
`;
