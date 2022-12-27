import { H4, P1 } from "@hs-job/ui";
import { FC } from "react";
import styled from "styled-components";

export interface CardProps {
  title: string;
  description: string;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;

  background: ${(props) => props.theme.palette.common.white};
  box-shadow: 0 0 4px ${(props) => props.theme.palette.secondary.dark};
  border-radius: 8px;
  max-width: 300px;
`;

export const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <CardWrapper>
      <H4>{title}</H4>
      <P1>{description}</P1>
    </CardWrapper>
  );
};
