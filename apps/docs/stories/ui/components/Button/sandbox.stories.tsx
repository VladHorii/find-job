import { Button, ButtonProps } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC<ButtonProps>> = (props) => {
  return (
    <Container>
      <Button {...props}>Кнопка</Button>
    </Container>
  );
};

export const Headers = Template.bind({});
Headers.args = {
  variant: "outlined",
  size: "small",
  disabled: false,
};
