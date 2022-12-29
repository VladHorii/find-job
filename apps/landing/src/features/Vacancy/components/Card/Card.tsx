import { H5 } from "@hs-job/ui";
import React, { FC } from "react";
import styled from "styled-components";
import { ComponyDescription, ComponyInfo } from "./components";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({
  title,
  description,
  jobVariant,
  companyType,
}) => {
  return (
    <ListItem>
      <H5>{title}</H5>
      <ComponyInfo jobVariant={jobVariant} companyType={companyType} />
      <ComponyDescription description={description} />
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 5px;
  gap: 7px;

  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.light};
  }

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    padding: 10px;
  }

  @media (min-width: ${(props) => props.theme.mediaQuery.desktop}px) {
    padding: 15px;
  }
`;
