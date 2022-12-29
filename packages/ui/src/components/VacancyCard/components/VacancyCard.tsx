import { FC } from "react";
import styled from "styled-components";
import { CompanyDescription } from "./CompanyDescription";
import { ControlIcons } from "./ControlIcons";

export interface VacancyCardProps {
  title?: string;
}

export const VacancyCard: FC<VacancyCardProps> = () => {
  return (
    <Container>
      <CompanyDescription />
      {/* TODO: Put vacancy description component */}
      <ControlIcons />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 50px;
`;
