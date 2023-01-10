import { VacancyDescriptionProps } from "@hs-job/types";
import React, { FC } from "react";
import styled from "styled-components";
import { H5, P2 } from "../../../typography";
import { ComponyInfo } from "./ComponyInfo";

export const VacancyDescription: FC<VacancyDescriptionProps> = ({
  title,
  description,
  jobVariant,
  companyType,
}) => {
  return (
    <ListItem>
      <H5>{title}</H5>
      <ComponyInfo jobVariant={jobVariant} companyType={companyType} />
      <P2>{description}</P2>
    </ListItem>
  );
};

const ListItem = styled.div`
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
