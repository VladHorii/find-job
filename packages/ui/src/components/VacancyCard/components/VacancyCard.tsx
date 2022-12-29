import { VacancyCardProps } from "@hs-job/types";
import { FC } from "react";
import styled from "styled-components";
import { VacancyDescription } from "../../VacancyDescription";
import { CompanyDescription } from "./CompanyDescription";
import { ControlIcons } from "./ControlIcons";

export const VacancyCard: FC<VacancyCardProps> = () => {
  return (
    <Container>
      <CompanyDescription />
      <VacancyDescription
        title={"Junior React Developer"}
        jobVariant={"Office"}
        companyType={"Outsource"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam..."
        }
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
