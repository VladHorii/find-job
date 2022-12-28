import { Container } from "@/components";
import { Button, H5, P4 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <H5>© 2022 HSjob.com</H5>
          <P4>You can always contact us by email info@hsjob.com</P4>

          <List>
            <ListItem>
              <Button variant={"link"} size={"normal"}>
                Out team
              </Button>
            </ListItem>

            <ListItem>
              <Button variant={"link"} size={"normal"}>
                Out team
              </Button>
            </ListItem>
          </List>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  box-shadow: 0 -1px 4px 1px ${(props) => props.theme.palette.secondary.light};
`;

const ContentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  gap: 10px;

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    flex-direction: column;
  }
`;

const ListItem = styled.li``;
