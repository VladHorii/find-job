import { Background, Form, Title } from "@/features/Auth";
import React from "react";
import styled from "styled-components";

export const Signin = () => {
  return (
    <Background>
      <Container>
        <ContentWrapper>
          <Title />
          <Form />
        </ContentWrapper>
      </Container>
    </Background>
  );
};

const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 90px;
  gap: 30px;

  background-color: ${(props) => props.theme.palette.secondary.light};
  box-shadow: 0px 0px 250px 20px #fff;
  border-radius: 50px;
`;
