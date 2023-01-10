import { Star, Trash } from "@hs-job/icons";
import styled from "styled-components";

export const ControlIcons = () => {
  return (
    <Container>
      <Star />
      <Trash />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;

  & svg {
    min-width: 16px;
    height: 16px;
  }

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    flex-direction: column;
  }

  @media (min-width: ${(props) => props.theme.mediaQuery.desktop}px) {
    & svg {
      min-width: 18px;
      height: 18px;
    }
  }
`;
