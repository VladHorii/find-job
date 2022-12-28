import { H4 } from "@hs-job/ui";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const DynamicText = () => {
  const currentTypeWriter = [
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    "Text 5",
    "Text 6",
  ];

  return (
    <Container>
      <H4>Lorem:&nbsp;</H4>

      <Typewriter
        options={{
          strings: currentTypeWriter,
          deleteSpeed: 200,
          autoStart: true,
          loop: true,
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;

  & .Typewriter {
    display: flex;
    gap: 2px;
  }

  & .Typewriter__wrapper,
  & .Typewriter__cursor {
    line-height: 150%;
    font-size: 15px;
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-style: ${(props) => props.theme.typography.fontStyle};
    font-weight: ${(props) => props.theme.typography.fontWeight.normal};

    color: ${(props) => props.theme.palette.common.black};

    @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
      line-height: 150%;
      font-size: 18px;
    }

    @media (min-width: ${(props) => props.theme.mediaQuery.desktop}px) {
      line-height: 120%;
      font-size: 24px;
    }
  }

  & .Typewriter__wrapper {
    color: ${(props) => props.theme.palette.primary.light};
  }
`;
