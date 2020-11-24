import { Reducer } from 'redux';
import { initialState } from '.';
import { SET_DATA } from '../constants';
import { ParsedRes, StateType } from '../types';

type Action = { type: string; payload: ParsedRes };

export const appReducer: Reducer<StateType, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        characterPage: action.payload.characterPage,
        total: action.payload.total,
      };
    default:
      return state;
  }
};
