import { Checkbox, CheckboxProps } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC<CheckboxProps>> = (props) => {
  return (
    <Container>
      <Checkbox {...props} />
    </Container>
  );
};

export const Sandbox = Template.bind({});
Sandbox.args = {
  checked: false,
  disabled: false,
};
