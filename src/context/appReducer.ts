import { SET_DATA } from '../constants';

type Action = { type: string; payload?: any };

const appReducer = (state: any, action: Action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        characterPage: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
