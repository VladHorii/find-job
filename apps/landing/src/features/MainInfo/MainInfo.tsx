import { Container } from "@/components";
import { Card } from "@/features";
import { FC } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  padding: 40px 0;
  justify-content: space-between;
  gap: 35px;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    flex-direction: row;
  }
`;

const MainInfoWrapper = styled.div`
  margin-top: auto;

  box-shadow: 0 -1px 4px 1px ${(props) => props.theme.palette.secondary.light};
  background-color: ${(props) => props.theme.palette.common.white};
`;

export const MainInfo: FC = () => {
  return (
    <MainInfoWrapper>
      <Container>
        <CardWrapper>
          <Card
            title={"Title of the card"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
          />
          <Card
            title={"Title of the card"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
          />
          <Card
            title={"Title of the card"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
          />
        </CardWrapper>
      </Container>
    </MainInfoWrapper>
  );
};
