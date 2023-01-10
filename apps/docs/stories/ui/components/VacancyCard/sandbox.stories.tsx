import { VacancyCard, VacancyCardProps } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/VacancyCard",
  component: VacancyCard,
} as ComponentMeta<typeof VacancyCard>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC<VacancyCardProps>> = (props) => {
  return (
    <Container>
      <VacancyCard {...props} />
    </Container>
  );
};

export const Sandbox = Template.bind({});
Sandbox.args = {
  title: "Senior React Developer",
  jobVariant: "Remote or Office",
  companyType: "Outstaff",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
  companyName: "Company Name",
  companyHr: "User Name, HR manager",
  publicationDate: "01 may, 2022",
};
