import { FC } from "react";
import styled from "styled-components";
import { H1 } from "../../../typography";

interface Props {
  onClick?: () => void;
}

export const Logo: FC<Props> = ({ onClick }) => {
  return (
    <Container>
      <H1 onClick={onClick}>
        <FirstText>HS</FirstText>
        <SecondText>Job</SecondText>
      </H1>
    </Container>
  );
};

const Container = styled.div`
  & h1 {
    display: flex;
  }
`;

const FirstText = styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.large};
  font-size: 20px;
  line-height: 24px;

  color: ${(props) => props.theme.palette.primary.dark};
`;

const SecondText = styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.large};
  font-size: 20px;
  line-height: 24px;

  margin-left: 5px;

  color: ${(props) => props.theme.palette.success.dark};
`;
