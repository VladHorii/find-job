import { App_Router } from "@hs-job/types";
import { Button } from "@hs-job/ui";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Links = () => {
  return (
    <Container>
      <Button variant={"link"}>
        <Link href={App_Router.SignUp}>Don`t have an account? Sign Up</Link>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin-left: auto;
`;
