import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
  height: auto;
  min-height: 100%;
  margin: 0;
  font-family: Roboto;
}
#root {
  height: auto;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyles;
