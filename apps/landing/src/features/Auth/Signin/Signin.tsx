import { Form, Links, Title } from "@/features";
import React from "react";
import styled from "styled-components";

export const Signin = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title />
        <Form />
        <Links />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 10px;
  padding: 30px 10px;
  gap: 30px;

  background-color: ${(props) => props.theme.palette.secondary.light};
  box-shadow: 0 0 250px 20px ${(props) => props.theme.palette.common.white};
  border-radius: 8px;

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    margin: 0;
    padding: 90px;

    border-radius: 50px;
  }
`;
