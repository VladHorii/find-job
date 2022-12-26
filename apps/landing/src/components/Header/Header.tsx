import { Burger } from "@hs-job/icons";
import { Logo } from "@hs-job/ui";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Burger />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px 10px;
  max-width: ${(props) => props.theme.mediaQuery.container.maxWidth};

  background-color: ${(props) => props.theme.palette.common.white};
`;
