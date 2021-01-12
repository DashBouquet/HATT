import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Oswald from 'assets/fonts/oswald-regular.woff2';
import Montserrat from 'assets/fonts/Montserrat-Regular.woff2';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  // You can continue writing global styles here
  body, p {
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, sans-serif;
  }

  input {
    max-width: 500px;
  }

  .gray {
    color: #828282;
  }

  .orange {
    background-color: #ff6600;
  }

  .background-gray {
    background-color: rgb(246, 246, 239);
  }

  .f11 {
    font-size: 11px;
  }

  .w85 {
    width: 85%;
  }

  .button {
    font-family: monospace;
    font-size: 10pt;
    color: black;
    background-color: buttonface;
    text-align: center;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    cursor: pointer;
    max-width: 250px;
  }

  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    src: url(${Oswald});
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(${Montserrat});
  }
`;
