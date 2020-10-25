import { SET_DATA } from '../constants';
import { ParsedRes, StateType } from '../types';

type Action = { type: string; payload: ParsedRes };

const appReducer = (state: StateType, action: Action) => {
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

export default appReducer;
