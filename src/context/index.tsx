import React, { createContext, FC, useCallback, useReducer } from 'react';
import { SET_DATA } from '../constants';
import { AppContextType, ParsedRes } from '../types';
import appReducer from './appReducer';
import { RMApi as Api } from '../utils/api';

export const AppContext = createContext({} as AppContextType);

export const AppState: FC = ({ children }) => {
  const RMApi = new Api();
  const initialState = { RMApi, characterPage: [], total: 0 };
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setData = useCallback(
    (payload: ParsedRes) => dispatch({ type: SET_DATA, payload }),
    []
  );

  return (
    <AppContext.Provider value={{ state, setData }}>
      {children}
    </AppContext.Provider>
  );
};
