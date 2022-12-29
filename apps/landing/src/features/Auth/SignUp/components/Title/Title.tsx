import { App_Router } from "@hs-job/types";
import { Logo, P1 } from "@hs-job/ui";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Title = () => {
  return (
    <Container>
      <P1>Let`s start with</P1>
      <Link href={App_Router.Main}>
        <Logo />
      </Link>
      <P1>!</P1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;
`;
