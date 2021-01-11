import { Reducer } from 'redux';
import { SET_TOKEN } from '../../Constants';
import { StateLogin } from '../../types';
import { LoginApi as Api } from '../../utils/api/loginApi';

type Action = { type: string; payload: any };
const LoginApi = new Api();
export const dashboardState = {
  LoginApi,
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
