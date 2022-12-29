import { App_Router } from "@hs-job/types";
import { Button, H3, H4 } from "@hs-job/ui";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Banner = () => {
  return (
    <Container>
      <Content>
        <H3>Information hidden</H3>
        <H4>for non-authorized users</H4>

        <Link href={App_Router.SignUp}>
          <Button variant={"link"} size={"large"}>
            Sign Up
          </Button>
        </Link>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px 0;
  gap: 5px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 0, 0, 0.15) 51.56%,
    rgba(255, 255, 255, 0.25) 100%
  );
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;
`;
