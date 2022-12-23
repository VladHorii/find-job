import React from 'react';
import styled from 'styled-components';
import { MediaQuery } from '@hs-job/types';

export const H1 = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 150%;

  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #1d283a;

  @media (min-width: ${MediaQuery.Desktop}px) {
    color: red;
  }
`;
