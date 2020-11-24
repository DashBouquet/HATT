import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { dashboardReducer } from '../modules/Dashboard/dashboardReducer';
import { createStore, combineReducers } from 'redux';
import { State } from '../types';

const appReducer = combineReducers<State>({
  dashboardReducer,
});
const store = createStore(appReducer);

export const AppState: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
