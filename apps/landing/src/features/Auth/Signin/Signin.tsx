import { Form, Links, Title } from "@/features";
import React from "react";
import styled from "styled-components";

export const SignIn = () => {
  return (
    <ContentWrapper>
      <Title />
      <Form />
      <Links />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  padding: 30px 10px;
  gap: 30px;

  background-color: ${(props) => props.theme.palette.secondary.light};
  box-shadow: 0 0 250px 20px ${(props) => props.theme.palette.common.white};
  border-radius: 8px;
  min-width: 90%;

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    min-width: 600px;
    padding: 90px;
    border-radius: 50px;
  }
`;
