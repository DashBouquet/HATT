import { State } from '../../types';

export const selectToken = (state: State) => state.loginReducer.loginToken;
export const selectLoginApi = (state: State) => state.loginReducer.LoginApi;
