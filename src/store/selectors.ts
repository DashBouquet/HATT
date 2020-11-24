import { State } from '../types';

export const selectCharacterPage = (state: State) =>
  state.dashboardReducer.characterPage;
export const selectRMApi = (state: State) => state.dashboardReducer.RMApi;
export const selectTotal = (state: State) => state.dashboardReducer.total;
