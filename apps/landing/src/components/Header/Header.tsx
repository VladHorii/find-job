import { Hamburger, Logo } from "assets/media/SVG";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Hamburger />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px 10px;

  background-color: ${(props) => props.theme.palette.common.white};
`;
