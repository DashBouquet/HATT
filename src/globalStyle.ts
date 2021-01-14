import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Oswald from 'assets/fonts/oswald-regular.woff2';
import Montserrat from 'assets/fonts/Montserrat-Regular.woff2';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    src: url(${Oswald}) format('woff2');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(${Montserrat}) format('woff2');
  }
  // You can continue writing global styles here
  body, p {
    padding: 0;
    margin: 0;
  }
`;
