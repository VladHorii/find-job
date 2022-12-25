import { Textarea, TextareaProp } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC<TextareaProp>> = (props) => {
  return (
    <Container>
      <Textarea {...props} />
    </Container>
  );
};

export const Sandbox = Template.bind({});
Sandbox.args = {
  placeholder: "placeholder",
  disabled: false,
};
