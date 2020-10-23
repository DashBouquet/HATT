import React, { FC } from 'react';
import { Test } from './styles';

const App: FC = () => {
  return (
    <Test>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Test>
  );
};

export default App;
