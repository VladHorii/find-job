import { Button } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const ContainerLink = () => {
  return (
    <Container>
      <Button variant={"link"}>Forgot password?</Button>
      <Button variant={"link"}>Don`t have an account? Sign Up</Button>
    </Container>
  );
};

const Container = styled.div``;
