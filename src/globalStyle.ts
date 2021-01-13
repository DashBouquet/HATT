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

`;
