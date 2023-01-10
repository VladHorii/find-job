import { VacancyDescriptionProps } from "@hs-job/types";
import { VacancyDescription } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/VacancyDescription",
  component: VacancyDescription,
} as ComponentMeta<typeof VacancyDescription>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC<VacancyDescriptionProps>> = (props) => {
  return (
    <Container>
      <VacancyDescription {...props} />
    </Container>
  );
};

export const Sandbox = Template.bind({});
Sandbox.args = {
  title: "Middle React Developer",
  jobVariant: "Office",
  companyType: "Product",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven12312iam...",
};
