import { VacancyCard } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";

export default {
  title: "docs/ui/components/Vacancy Card",
  component: VacancyCard,
} as ComponentMeta<typeof VacancyCard>;

const Template: ComponentStory<FC> = () => {
  return <VacancyCard />;
};

export const Sandbox = Template.bind({});
Sandbox.args = {};
