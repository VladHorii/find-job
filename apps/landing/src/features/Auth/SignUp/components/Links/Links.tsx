import { Button } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const Links = () => {
  return (
    <Container>
      <Button variant={"link"}>Do you have an account? Sign In</Button>
    </Container>
  );
};

const Container = styled.div`
  margin-left: auto;
`;
