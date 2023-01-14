import React from "react";
import styled from "styled-components";
import { Form, Tags } from "./components";

export const Filter = () => {
  return (
    <Container>
      <Form />
      <Tags />
    </Container>
  );
};

const Container = styled.div`
  width: 25%;
`;
