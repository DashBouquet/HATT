import { State } from '../../types';

//dashboard
export const selectCharacterPage = (state: State) =>
  state.dashboardReducer.characterPage;
export const selectRMApi = (state: State) => state.dashboardReducer.RMApi;
export const selectTotal = (state: State) => state.dashboardReducer.total;
export const selectCurrPage = (state: State) => state.dashboardReducer.currPage;
export const selectCurrChar = (state: State) => state.dashboardReducer.currChar;
export const selectHiddenTextVisible = (state: State) =>
  state.dashboardReducer.hiddenTextVisible;
export const selectVisible = (state: State) => state.dashboardReducer.visible;
