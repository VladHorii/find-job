import { CheckBox, CheckBoxProps } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC<CheckBoxProps>> = (props) => {
  return (
    <Container>
      <CheckBox {...props} />
    </Container>
  );
};

export const Headers = Template.bind({});
Headers.args = {
  checked: false,
  size: "small",
  disabled: false,
};
