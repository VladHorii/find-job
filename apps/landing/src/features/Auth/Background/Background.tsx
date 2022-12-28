import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;

  background: linear-gradient(180deg, #88aeff 0%, #fdffa5 100%);
`;

export const Background: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};
