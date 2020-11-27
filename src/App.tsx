import React, { FC } from 'react';
import { Layout } from './modules/Layout';
import { AppState } from './store';

export const App: FC = () => {
  return (
    <AppState>
      <Layout />
    </AppState>
  );
};
