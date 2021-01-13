import { State } from '../../types';

export const selectToken = (state: State) => state.loginReducer.loginToken;
