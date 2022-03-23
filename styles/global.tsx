import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body {
    background-color: #f5f5f5;
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
    font-family: "Rajdhani", sans-serif;
    line-height: 1.25;
    margin: 0px;
  }

  h1 {
    @media only all {
      font-size: 56px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 80px;
    }
  }

  h2 {
    font-weight: 700;
    @media only all {
      font-size: 24px;
    }
  }

  p {
    margin: 0px;
  }
`;
