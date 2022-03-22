import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    font-family: Avenir Next, sans-serif;
    font-size: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
  }

  p {
    margin: 0px;
  }
`;
