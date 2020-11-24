import { StateType } from '../types';

export const selectCharacterPage = (state: StateType) => state.characterPage;
export const selectRMApi = (state: StateType) => state.RMApi;
export const selectTotal = (state: StateType) => state.total;
