import { FC, PropsWithChildren } from "react";
import { createGlobalStyle } from "styled-components";

type Props = PropsWithChildren<FC>;

export const BaseStyles: Props = ({ children }) => {
  return (
    <>
      <ResetStyled />
      {children}
    </>
  );
};

export const ResetStyled = createGlobalStyle`
  * {
    font-style: normal;
  }

  body {
    height: 100%;
  }

  * {
    padding: 0;
    margin: 0;
    border: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  aside,
  nav,
  footer,
  header,
  section,
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
  }

  ul,
  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button,
  input[type='submit'] {
    display: inline-block;
    box-shadow: none;
    background: transparent none;
    cursor: pointer;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }
`;
