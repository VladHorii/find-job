import { H4, P1 } from "@hs-job/ui";
import { FC } from "react";
import styled from "styled-components";

export interface CardProps {
  title: string;
  description: string;
}

const CardWrapper = styled.div`
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  gap: 10px;

  cursor: pointer;

  box-shadow: 0px 0px 1px ${(props) => props.theme.palette.secondary.main};
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: 8px;

  transition: transform 100ms linear;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <CardWrapper>
      <H4>{title}</H4>
      <P1>{description}</P1>
    </CardWrapper>
  );
};
