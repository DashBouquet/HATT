import { Reducer } from 'redux';
import { SET_TOKEN } from '../../Constants';
import { StateLogin } from '../../types';

type Action = { type: string; payload: any };

export const dashboardState = {
  loginToken: '',
};

export const loginReducer: Reducer<StateLogin, Action> = (
  state = dashboardState,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        loginToken: action.payload,
      };
    default:
      return state;
  }
};
