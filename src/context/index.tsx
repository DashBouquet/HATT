import React, { createContext, FC, useReducer } from 'react';
import { SET_DATA } from '../constants';
import { AppContextType } from '../types';
import appReducer from './appReducer';

export const AppContext = createContext({} as AppContextType);

export const AppState: FC<any> = ({ children }) => {
  const initialState = { characterPage: [] };
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setData = (payload: any) => dispatch({ type: SET_DATA, payload });

  return (
    <AppContext.Provider value={{ state, setData }}>
      {children}
    </AppContext.Provider>
  );
};
