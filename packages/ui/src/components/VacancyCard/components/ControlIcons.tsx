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
  flex-direction: column;
  gap: 10px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;
