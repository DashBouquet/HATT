import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'antd/dist/antd.css';
import './App.less';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  // You can continue writing global styles here
  body, p {
    padding: 0;
    margin: 0;
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
