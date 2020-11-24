import { Reducer } from 'redux';
import { SET_DATA } from '../../constants';
import { ParsedRes, StateDashboard } from '../../types';
import { RMApi as Api } from '../../utils/api';

type Action = { type: string; payload: ParsedRes };

const RMApi = new Api();
export const dashboardState = { RMApi, characterPage: [], total: 0 };

export const dashboardReducer: Reducer<StateDashboard, Action> = (
  state = dashboardState,
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
