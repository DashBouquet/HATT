import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'antd/dist/antd.css';
import Oswald from 'assets/fonts/oswald-regular.woff2';
import Montserrat from 'assets/fonts/Montserrat-Regular.woff2';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  // You can continue writing global styles here
  body, p {
    padding: 0;
    margin: 0;
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

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
