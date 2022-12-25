import { TextArea, TextAreaProp } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC<TextAreaProp>> = (props) => {
  return (
    <Container>
      <TextArea {...props} />
    </Container>
  );
};

export const Sandbox = Template.bind({});
Sandbox.args = {
  placeholder: "placeholder",
  disabled: false,
};
