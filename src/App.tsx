import React, { FC } from 'react';
import { AppState } from './context';
import { Layout } from './modules/Layout';

export const App: FC = () => {
  return (
    <AppState>
      <Layout />
    </AppState>
  );
};
