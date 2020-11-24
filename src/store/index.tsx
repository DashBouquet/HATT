import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { appReducer } from './appReducer';
import { RMApi as Api } from '../utils/api';
import { createStore } from 'redux';

const RMApi = new Api();
export const initialState = { RMApi, characterPage: [], total: 0 };
const store = createStore(appReducer, initialState);

export const AppState: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
