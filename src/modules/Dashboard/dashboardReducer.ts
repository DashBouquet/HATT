import { Reducer } from 'redux';
import {
  SET_DATA,
  SET_CURR_PAGE,
  SET_CURR_CHAR,
  SET_TEXT_VISIBLE,
  SET_MODAL_VISIBLE,
} from '../../constants';
import { StateDashboard } from '../../types';
import { RMApi as Api } from '../../utils/api';

type Action = { type: string; payload: any };

const RMApi = new Api();
export const dashboardState = {
  RMApi,
  characterPage: [],
  total: 0,
  currPage: 1,
  currChar: 1,
  hiddenTextVisible: false,
  visible: false,
};

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
    case SET_CURR_PAGE:
      return {
        ...state,
        currPage: action.payload,
      };
    case SET_CURR_CHAR:
      return {
        ...state,
        currChar: action.payload,
      };
    case SET_TEXT_VISIBLE:
      return {
        ...state,
        hiddenTextVisible: !state.hiddenTextVisible,
      };
    case SET_MODAL_VISIBLE:
      return {
        ...state,
        visible: action.payload,
      };
    default:
      return state;
  }
};
