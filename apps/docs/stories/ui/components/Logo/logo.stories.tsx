import { Logo } from "@hs-job/ui";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC } from "react";
import styled from "styled-components";

export default {
  title: "docs/ui/components/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<FC> = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export const Default = Template.bind({});
