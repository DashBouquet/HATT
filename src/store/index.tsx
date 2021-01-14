import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { dashboardReducer } from 'modules/Dashboard/dashboardReducer';
import { loginReducer } from 'modules/LoginGQL/loginReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { State } from 'types';

const appReducer = combineReducers<State>({
  dashboardReducer,
  loginReducer,
});

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export const AppState: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
