import { H1, H2, H3, H4, P1, P2, P3, P4 } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";

export default {
  title: "docs/ui/typography",
  component: H1,
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<FC<{ text: string }>> = ({ text }) => {
  return (
    <div>
      <H1>H1: {text}</H1>
      <H2>H2: {text}</H2>
      <H3>H3: {text}</H3>
      <H4>H4: {text}</H4>
      <P1>P1: {text}</P1>
      <P2>P2: {text}</P2>
      <P3>P3: {text}</P3>
      <P4>P4: {text}</P4>
    </div>
  );
};

export const Sandbox = Template.bind({});
Sandbox.args = {
  text: "Lorem",
};
