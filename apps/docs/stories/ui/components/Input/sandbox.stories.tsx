import { Input, InputProps } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC<InputProps>> = (props) => {
  return (
    <Container>
      <Input {...props} />
    </Container>
  );
};

export const Sandbox = Template.bind({});
Sandbox.args = {
  placeholder: "placeholder",
  size: "small",
  disabled: false,
};
