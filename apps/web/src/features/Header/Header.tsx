import { Container } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";
import { LeftContent, RightContent } from "./components";

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <LeftContent />
        <RightContent />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
  box-shadow: 0 1px 5px ${(props) => props.theme.palette.secondary.light};
`;
