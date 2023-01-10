import { VacancyCardProps } from "@hs-job/types";
import { FC } from "react";
import styled from "styled-components";
import { VacancyDescription } from "../../VacancyDescription";
import { CompanyDescription } from "./CompanyDescription";
import { ControlIcons } from "./ControlIcons";

export const VacancyCard: FC<VacancyCardProps> = ({
  title,
  description,
  companyName,
  companyHr,
  publicationDate,
  jobVariant,
  companyType,
}) => {
  return (
    <Container>
      <CompanyDescription
        companyName={companyName}
        companyHr={companyHr}
        publicationDate={publicationDate}
      />

      <VacancyDescription
        title={title}
        jobVariant={jobVariant}
        companyType={companyType}
        description={description}
      />
      <ControlIcons />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;

  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.light};
  }

  @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
    flex-direction: row;

    padding: 10px;
    gap: 50px;
  }

  @media (min-width: ${(props) => props.theme.mediaQuery.desktop}px) {
    padding: 15px;
  }
`;
